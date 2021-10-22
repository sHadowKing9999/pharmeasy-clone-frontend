url = "https://www.pharmeasy.in"
import urllib
import re
from bs4 import BeautifulSoup as soup
from collections import namedtuple
import itertools
s = soup(str(urllib.urlopen(url).read()), 'lxml')
blocks = s.find_all('div', {'id': re.compile('index\-[A-Z]')})
results_data = {[c.text for c in i.find_all('h2', {'class':'h1'})][0]:[b['href'] for b in i.find_all('a', href=True)] for i in blocks}
final_data = []
category = namedtuple('category', 'abbr, link, products')
for category1, links in results_data.items():
   for link in links:
      page_data = str(urllib.urlopen(link).read())
      print( "link: ", link)
      page_links = re.findall(';page\=(.*?)#results">(.*?)</a>', page_data)
      if not page_links:
         final_page_data = soup(page_data, 'lxml')
         final_titles = [i.text for i in final_page_data.find_all('h3', {'class':'itemHeading'})]
         new_category = category(category1, link, final_titles)
         final_data.append(new_category)

      else:
         page_numbers = set(itertools.chain(*list(map(list, page_links))))

         full_page_links = ["{}?imgMode=m&sort=&nbPerPage=48&page={}#results".format(link, num) for num in page_numbers]
         for page_result in full_page_links:
            new_page_data = soup(str(urllib.urlopen(page_result).read()), 'lxml')
            final_titles = [i.text for i in new_page_data.find_all('h3', {'class':'itemHeading'})]
            new_category = category(category1, link, final_titles)
            final_data.append(new_category)

print (final_data)