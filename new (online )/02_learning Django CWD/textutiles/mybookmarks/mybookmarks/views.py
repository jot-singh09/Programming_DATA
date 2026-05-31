from django.http import HttpResponse as Show
def index(request):
    return Show(''' <h1>My BookMarks</h1>  <a href="https://youtube.com">YouTube</a> <div>  <a href="https://instagram.com">Instagram </a> </div>''')
