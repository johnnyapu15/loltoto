#-*- coding:utf-8 -*-


from solc import compile_source
from web3 import Web3, HTTPProvider
from flask import *
from flask_socketio import *

DEBUG = True
SECRET_KEY = 'dev key'

app = Flask(__name__)
app.config.from_object(__name__)
io = SocketIO(app)

@app.route('/')
def login():
    err = None
    # if request.method == 'POST':
    #     print(request.json)
    #     session['user_id'] = request.form['user_id']
    #     session['price'] = request.form['price']
    #     session[request.form['getting']] = True
    #     session['bus_id'] = request.form['bus_id']
    #     if request.form['getting'] == 'get_on':
    #         session['getting'] = 1
    #     elif request.form['getting'] == 'get_off':
    #         session['getting'] = 0
    #     return redirect(url_for('unlocking'))
    return render_template('index.html', error = err)


if __name__ == '__main__':
    io.run(app, host = '0.0.0.0')

