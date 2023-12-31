# Climate Change Facts
# Looking at Data frm worlld bank with focus on Temperature and CO2 emissions
Climate change is a critical issue facing our planet, and understanding climate data is essential for monitoring and analyzing its impact. In this project, we explore a Flask web application that connects to a PostgreSQL database containing climate data. The application provides interactive visualizations to help us gain insights into temperature, CO2 emissions, humidity, and sea level rise.

## Data sources
The climate change data used in the dashboards are sourced from: https://www.kaggle.com/datasets/goyaladi/climate-insights-dataset?select=climate_change_data.csv and https://ourworldindata.org/co2-and-greenhouse-gas-emissions.

## Contributors
- Nour Balhaj -- (@nourbalhaj)
- Hany Dief -- (@hanydief)
- Beethoven Sabar -- (@bsabar)
- Alejandro Gutierrez -- (@alejfxguti)
- Raymond Darrough -- (@raymonddarrough)
- João Fortunato -- (@joaopedrofortunato)

## Google Slides Presentation Link
https://docs.google.com/presentation/d/1iqDcU6FGP9ofsdUX73cQ_7jqZDb_SMMXgz0V0N04E2w/edit?usp=sharing

## Technology Used

- Python
- Flask
- SQLAlchemy
- Plotly
- D3.js
- ECharts

## Installation

1. Clone the repository to your local machine.
2. Make sure you have PostgreSQL installed and running.
3. Create a new PostgreSQL database using pgAdmin and name it `P3-Climate_Data`.
  - Set up the database by running the necessary SQL scripts (not provided in this repository).
  - You can use either a local PostgreSQL instance or a cloud-based instance (ElephantSQL). The connection details for both options are included in the code, and you can choose which engine to use by commenting/uncommenting the respective lines.
4. Install the required Python packages by running pip install for packages mentioned above.
5. Run the Flask application using `python P3_Flask.py`.
6. Open your web browser and navigate to http://localhost:5000 to access the Climate App.

## Flask Routes / API Endpoints
The flask application provides the following routes to fetch data for visualizations:

- `/temp`: Returns the average temperature data for each year and country. The data is sorted in descending order of temperature and limited to the top 10 entries.
- `/co2`: Returns the average CO2 emissions data for each year and country. The data is sorted in descending order of CO2 emissions and limited to the top 10 entries.
- `/humidity`: Returns the average humidity data for each year and country. The data is sorted in descending order of humidity and limited to the top 10 entries.
- `/sealevel`: Returns the average sea level rise data for each year and country. The data is sorted in descending order of sea level rise and limited to the top 10 entries.
- `/temperatures`:  Returns the average temperature data for specific countries ('Finland', 'France', 'Germany', 'Iceland', 'Norway', 'Poland', 'Russia', 'United Kingdom') over the years. The data is grouped by year and country.
- `/racebarco`: Returns the average CO2 emissions data for each year and country. The data is grouped by year and country.
- `/pltmapco`: Returns the average CO2 emissions data for each country. The data is grouped by country.

## Visualization
The flask application uses D3.js, ECharts, and Plotly to fetch and visualize the climate data. The code makes asynchronous requests to the Flask routes for temperature, CO2 emissions, humidity, and sea level data. The following visualizations are then created:
- Bar charts: Displays the average temperature, CO2 emissions, humidity, and sea level rise data for the top 10 entries.
- Race Line chart: Shows the temperature data for specific countries over the years.
- Race bar chart: Compares the temperature and CO2 emissions data for different countries over the years.
- Plotly map: Presents the average CO2 emissions data for each country.

## Project Structure
`P3_Flask.py:` The main Flask application file that handles routing and serves the webpages. \
`templates/index.html:` The HTML template file that contains the structure and layout of the dashboard. \
`static/css/styles.css:` The CSS file that defines the styles for the dashboard. \
`static/js/app.js:` The JavaScript file that contains the logic for data processing and chart rendering. \
`Resources/:` Directory containing the climate change dataset files. \
`P3_CLimate_Data_V3.sql:` SQL to create Climate Change Database. \
`P3_data_cleaningV3.ipynb:` Pandas jupyter notebook data prep and initial visualizations. \
`Outputs_CSV_&_Json/:` Directory containing outputs of jupyter notebook data prep and initial visualization. 

## License

This project is licensed under the [MIT License](LICENSE).

## Notes
- The JavaScript code in the static folder handles the rendering of charts using the retrieved data from the Flask routes. You can find the JavaScript code in the static folder of this repository.
- Please make sure to modify the database connection details in the Flask app code before running the application.
- Feel free to explore the different routes to visualize the climate data in various chart formats.
- 
