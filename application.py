from flask import Flask, render_template, request
import datetime as dt
import json, csv
application = Flask(__name__)


@application.route("/")
def index():
    return render_template('base.html')


@application.route("/submit", methods=['POST'])
def submit():
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

    with open('ent.json', "r+") as outfile:
        file_data = json.load(outfile)
        file_data['data'].append(transaction)
        outfile.seek(0)
        json.dump(file_data, outfile, indent=4)

    return render_template("success.html")
    

if __name__ == '__main__':
    application.run(debug=True)