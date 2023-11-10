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
                "spend-type": request.form['spend-type'],
                "amount": request.form['amount'],
                "category": request.form['category'],
                "sub-category": request.form['sub-category'],
                "company": request.form['company'],
                "audience": request.form['audience'],
                "essential": request.form['essential'],
                "comments": request.form['comments'],
    }
    return transaction


def validate_transaction(transaction):
    if "," in transaction['amount']:
        transaction['amount'] = transaction['amount'].replace(",", ".")
        print(transaction['amount'])
    if transaction['spend-type'] == "spend":
        transaction['amount'] = str(float(transaction['amount'])*(-1))


def append_entry(transaction):
    """Opens entries json and adds new transaction"""

    with open(f'files/database.json', "r+") as file:
        transaction_file = json.load(file)
        transaction_file['data'].append(transaction)
        file.seek(0)
        json.dump(transaction_file, file, indent=4)
    
    print("Transaction added")