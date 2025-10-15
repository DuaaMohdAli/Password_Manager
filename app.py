from flask import Flask, request, render_template

app = Flask(__name__)
passwords = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        website = request.form["website"]
        username = request.form["username"]
        password = request.form["password"]
        entry = {"website": website, "username": username, "password": password}
        passwords.append(entry)
    return render_template("index.html", passwords=passwords)

if __name__ == "__main__":
    app.run(debug=True)
