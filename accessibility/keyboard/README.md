# Keyboard 

## Resume:
Let’s start by the “Work” section:
We have an issue with the focus (moving from one link to another with the TAB key) in the Desktop version. With the DevTools, you can active the focus on the <a> inside .card-title and nothing happen.

To solve it, we need to update the way we are managing the hover state of .card-title:

In your keyboard/01-styles.css file, in the /* Card WORK section
Remove opacity: 0 inside .card-work .card-title
Remove .card-work:hover .card-inner
Remove .card-work:hover .card-title
Target the selector .card-work .card-title a and add an opacity to 0.
For .card-work .card-title a with the a in state focus and .card-work:hover .card-title a:
Property: opacity, Value: 1
Property: height, Value: 100%
Property: background-color, Value: rgba(0, 0, 0, 0.7)
Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.
<br><br>
All the other elements have a blue outline around.

## Result:
![image](https://github.com/TessierV/holbertonschool-web_front_end/assets/113889290/640eb184-db43-4318-87b1-d8fc1bee10c5)
<br><br>

<br/><hr>
<p align="right">Holberton TOULOUSE</p>
