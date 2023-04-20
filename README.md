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
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.


