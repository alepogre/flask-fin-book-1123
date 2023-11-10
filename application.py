from flask import Flask, render_template, request
from src.transaction import *


application = Flask(__name__)


@application.route("/")
def index():
    return render_template('base.html')


@application.route("/submit", methods=['POST'])
def submit():

    new_transaction = transaction.create()
    transaction.append_entry(new_transaction)
    return render_template("success.html")
    

if __name__ == '__main__':
    application.run(debug=True)