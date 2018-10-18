#  An *interplanetary* realtime yearly savings calculator for monthly expenses 💵

<imr src="https://github.com/ipfs/logo/blob/master/stickers/2016-05-09-ipfs-3d-ice-text.png">

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![](https://images.microbadger.com/badges/version/limiaspasdaniel/yearlybenefits:frontend.latest.svg)](https://microbadger.com/images/limiaspasdaniel/yearlybenefits:frontend.latest "Download frontend image")
[![](https://images.microbadger.com/badges/version/limiaspasdaniel/yearlybenefits:backend.latest.svg)](https://microbadger.com/images/limiaspasdaniel/yearlybenefits:backend.latest "Download backend image")



### Now deployed to the IPFS network!  [here](https://ipfs.infura.io/ipfs/QmVh1oi9fQs6KnhvbVSFoCpWmywdBzWAmGAcu3YzN89C8p/)  🛰
Important note: please help this application to be alive by loading `http://localhost:8080/ipfs/QmVh1oi9fQs6KnhvbVSFoCpWmywdBzWAmGAcu3YzN89C8p` on your local node.



A simple and tested web application built in React that lets you
calculate how much money you will save per year by using taking advantadge of your company benefits in a monthly basis

This model is based in the IRPF tax model of 2017 from Spain.

![alt text](https://user-images.githubusercontent.com/7485885/46021550-3c800e80-c0e1-11e8-9358-85b9741782e4.png)

### Architecture
- The frontend application is build using React + Redux and tested using the [Enzyme](https://github.com/airbnb/enzyme) testing library by Airbnb.
- The web application requests the yearly savings value to an scalable WebSockets API built with [SocketCluster](https://github.com/SocketCluster/socketcluster)

### Prerequisites

 - Docker for Mac or Docker for Windows

### How to run it

1. Clone the repository

	`$ git clone git@github.com:limiaspasdaniel/YearlyBenefitsCalculator.git`

2. Navigate to the repository root and run:

	`$ docker-compose up --build`

Once the docker containers have finished loading open `http://localhost:3561` in your browser and you can start using the calculator.

