from flask import Flask , render_template
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =  "sqlite:///test.db"
db = SQLAlchemy(app)
class Test(db.Model):
    sno = db.Column(db.Integer, primary_key=True)

    def __repr__(self):
        return f"{self.sno}"


@app.route("/")
def hello_world():
    return render_template('index.html')
    # return "<p>Hello, World!</p>"

@app.route("/products")
def products():
    return 'This is products page and it is open with /products'
    
if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # creates test.db and table
    app.run(debug=True)