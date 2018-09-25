# A yearly savings calculator for monthly expenses

A simple and tested web application built in React that lets you
calculate how much money you will save per year by using taking advanve of your company benefits in a monthly basis

This model is based in the IRPF tax model of 2017 from Spain.

### Architecture
The frontend application is build using React and tested using the [Enzyme](https://github.com/airbnb/enzyme) testing library by Airbnb.
The web application requests the yearly savings value to an API built in [Ruby on Rails 5](https://rubyonrails.org) and tested using TestUnit.

### Prerequisites

 - Docker for Mac or Docker for Windows

### How to run it

1. Clone the repository

	`$ git clone git@github.com:limiaspasdaniel/YearlyBenefitsCalculator.git`

2. Navigate to the repository root and run:

	`$ docker-compose up --build`

Once the docker containers have finished loading open `http://localhost:3561` in your browser and you can start using the calculator.

