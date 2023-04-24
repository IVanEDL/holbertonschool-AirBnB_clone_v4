import os
import uuid
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/0-hbnb/', strict_slashes=False)
def hbnb():
    cache_id = str(uuid.uuid4())
    try:
        return render_template('100-hbnb.html', cache_id=cache_id)
    except:
        return render_template('8-hbnb.html', cache_id=cache_id)


if __name__ == "__main__":
    app.run(host=os.getenv("HBNB_API_HOST", '0.0.0.0'),
            port=os.getenv("HBNB_API_PORT", '5000'),
            debug=True if os.getenv("HBNB_ENV") == "development" else False)
