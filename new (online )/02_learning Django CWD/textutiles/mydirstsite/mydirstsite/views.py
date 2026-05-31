from typing_extensions import final

from django.http import HttpResponse as Show
from django.shortcuts import render as r
def index(request):
    # text={'name':'karan'} # we pass in dict only
    return r(request,'index.html')


def about(request):
    return Show("Hello, I am About Page!")


def analyze(request):
    djtext = request.GET.get('text', 'No textprovided') # to g`et the value of text we write inform
    rmvpunch=request.GET.get('removepunc','off')
    captalize=request.GET.get('capitalize','off')
    removespace=request.GET.get('removespace','off')
    print(rmvpunch)
    print(djtext)
    print(captalize)
    print(removespace)
    if rmvpunch=="on":
        print(type(djtext))
        punchList='''!()-[]{};:'\"\\,<>./?@#$%^&*_~'''
        final=""
        
        for char in djtext:
                if char not in punchList:
                    final=final+char
        
        
        dict={'purpose':rmvpunch,'text':final}
        return r(request,'analyze.html',dict)
    elif captalize=="on":
        punchList='''!()-[]{};:'\"\\,<>./?@#$%^&*_~'''
        for char in djtext:
            if char not in punchList:
                final=final+char.upper()
        dict={'purpose':captalize,'captalized':final}
        return r(request,'analyze.html',dict)
    elif removespace=="on":
        dict1={'purpose':removespace,'removedspace':djtext.strip()}
        return r(request,'analyze.html',dict1)
    else:
        return Show("Error")