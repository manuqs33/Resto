## Name
A Django-React app for a restaurant.

## Running the project
To run the project the Front End React app and the Back End Django Api should be initialized together.

Open a terminal window, go to the frontend folder and run
`npm run dev`

Open another terminal window. To run the Django project, you should create a virtual environment. To do so, you should have Python already installed in your PC (normally it's installed by default on most Linux distros and MacOS).

Once you have Python, you can create a virtualenv with the following commands:

Windows:

`python -m venv myenv`

Linux/MacOS:
`python3 -m venv myenv`

This will create the venv in your current folder, but it can be anywhere you like.
<br>

##### Activate venv

Windows:

`myenv\Scripts\activate.bat`

Linux/MacOS:
`source myenv/bin/activate`

Once the venv is activated, run:

`pip install -r requirements.txt`

Once the requirements are installed, go to the django-api folder and run:

`python manage.py runserver`

The api will initialize in the ip address shown in the terminal

Requests from the Front End should be available already, but they're not tested yet.


## Description
The project is a webpage for testing/QA students, so it has a few intentional bugs for them to find. Check if you can discover them yourself!



