from flask import Flask, render_template
app = Flask(__name__)

@app.route('/lesbify')
def home():
    return render_template('home.html')