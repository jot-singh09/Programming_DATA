from django.http import HttpResponse 
from django.shortcuts import render  


        

def index(request):
    return render(request,'index.html')
def analyze(request):
    djtext = request.GET.get('message', 'No text provided')
    removepunch = request.GET.get('punch', 'off')
    captalized= request.GET.get('captalize','off')
    removeSpace = request.GET.get('rmvspc','off')
    
    if removepunch=='on':
        final=""
        punchList='''!()\\-[]{};:'",<>./?@#$%^&*_~'''
        for char in djtext  :
            if char not in punchList:
                final=final+char
        return render(request,'analyze.html',{'text':final,'output':'remove punchation'})
    
    elif captalized=='on':
        
        final=djtext.upper()
        return render(request,'analyze.html',{'text':final,'output':'captalized'})
    
    elif removeSpace=='on':
        final=djtext.strip()
        return render(request,'analyze.html',{'text':final,'output':'remove space'})
    elif removeSpace=='on'and captalized=='on' and removepunch=='on':
        final=djtext.strip().upper()
        punchList='''!()\\-[]{};:'",<>./?@#$%^&*_~'''
        for char in final  :
            if char not in punchList:
                final=final+char
        return render(request,'analyze.html',{'text':final,'output':'remove space and captalized and remove punchation', 'output':'remove space and captalized and remove punchation'  })
        
    else:
        return  render(request,'error.html')
    
   
               
       
                    
    
    
    
    
    
    
    
    # print(djtext)
    # print(removepunch)
    # if removepunch=='on':
    #     final=''
    #     for char in djtext:
    #         if punchList not in djtext:
    #             final=final+char
        
   

    
    