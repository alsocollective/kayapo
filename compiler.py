from bs4 import BeautifulSoup
from os import listdir
import os
from os.path import isfile, join
path = os.path.dirname(os.path.realpath(__file__))

base = open("base.html","r+")
baseHtml = base.read()
base.close()

for f in listdir( path+"/ajax" ):
	if f.endswith(".html"):
		print f
		htmlFile = open("ajax/"+f,"r+")
		html = htmlFile.read()
		htmlFile.close()
		Id = f.split(".")[0]
		soup = BeautifulSoup(baseHtml)
		htmlSoup = BeautifulSoup(html)

		soup.find_all(id=Id)[0].insert(0,htmlSoup)
		out = open(Id+".html","w+")
		out.write(soup.encode("utf-8"))
		out.close()