from flask import Flask, render_template, request
import datetime as dt
import src.params as params
import src.transaction as transaction
import json, csv


application = Flask(__name__)

@application.route("/")
def index():
    cat_dict = params.categories
    cat_options = cat_dict

    return render_template('base.html', category_selection = cat_options)


@application.route("/submit", methods=['POST'])
def submit():

    new_transaction = transaction.create()
    
    transaction.append_entry(new_transaction)
    
    return render_template("success.html")
    

if __name__ == '__main__':
    application.run(debug=True)