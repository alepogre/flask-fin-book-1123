import datetime as dt
from flask import Flask, request
import json


def create():
    """Fetch input from form and create JSON"""
    
    creation_time = dt.datetime.utcnow()
    creating_at = str(creation_time)

    transaction = {
                "created_at": creating_at,
                "date": request.form['transaction_date'],
                "account": request.form['account'],
                "amount": request.form['amount'],
                "category": request.form['category'].lower(),
                "comments": request.form['comments'].lower(),
                "company": request.form['company'],
    }
    return transaction


def append_entry(transaction):
    """Opens entries json and adds new transaction"""

    with open(f'files/database.json', "r+") as file:
        transaction_file = json.load(file)
        transaction_file['data'].append(transaction)
        file.seek(0)
        json.dump(transaction_file, file, indent=4)
    
    print("Transaction added")