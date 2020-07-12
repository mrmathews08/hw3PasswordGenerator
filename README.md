# hw3PasswordGenerator

##Homework 3 assignment

This is my third homework assignment. This is a password generator that takes into account user input about the criteria, and then generates a random password.
The page is activated when the user presses the Generate password button. At which point a series of prompts will appear and gather information about password criteria
based on the users input. The first prompt asks for a number value between 8 - 128 and the rest are yes or no questions. Based on the answers, the application will generate 
a random password in the password textbox.

Building this application was daunting at first but through a little persistence, I was able to make some major breakthroughs in understadning javascript after Saturday's class.
I'm still looking at proper syntax for things like {} instead of () and things like that. However, after successfully running this application, I feel much more confident.
The only hiccup I really had was getting my final password that was generated to appear in the textbox. Through a little guidance from the slack tudor, I was able to realize
that targeting that particular html element to input my text was easier if I turned it into a DOM object. This was a huge breakthrough for me and makes navigating and implementing the DOM much easier.


# Installation

I only edited Javascript thhrough this assignment. I started first by pseudocoding first, and organizing the information and tasks I wanted the browser to run. I started first 
by assigning variables to information I would need later on. (the user input). I then assigned possible values to those variables and convert one of the variable to Uppercase letters.
Using an event listener, I started asking the user for input using the prompt windows. I then had to writed results for the possible user inputs. There were quite a lot and I know there is a
better way of doing this. 
I added the loop to search for random variables in the selected criteria, and then placed that string of values in the textbox. 

# Usage

Use this site to generates a random password between 8-128 characters. Choose from a few different criteria options. 

<img width="1680" alt="Screen Shot 2020-07-12 at 5 23 42 PM" src="https://user-images.githubusercontent.com/65747246/87258936-cccd4600-c464-11ea-80be-5f6d80512a08.png">

