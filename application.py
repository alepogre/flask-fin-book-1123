from flask import Flask, render_template, request, url_for

from src import transaction
from src.transaction import *


application = Flask(__name__)


@application.route("/")
def index():
    return render_template('base.html')


@application.route("/transaction")
def new_transaction():
    return render_template('transaction.html')


@application.route("/submit", methods=['POST'])
def submit():

    add_new_transaction = transaction.create()
    transaction.validate_transaction(add_new_transaction)
    transaction.append_entry(add_new_transaction)
    return render_template("success.html")
    

if __name__ == '__main__':
    application.run(debug=True)