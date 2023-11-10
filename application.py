from flask import Flask, render_template, request
import datetime as dt
import src.params as params
import src.transaction as transaction
import json, csv


application = Flask(__name__)


@application.route("/")
def index():
    return render_template('base.html')


@application.route("/submit", methods=['POST'])
def submit():
    # Fetch input from form and create JSON
    new_transaction = transaction.create()
    # Append JSON to database
    transaction.append_entry(new_transaction)
    
    return render_template("success.html")
    

if __name__ == '__main__':
    application.run(debug=True)