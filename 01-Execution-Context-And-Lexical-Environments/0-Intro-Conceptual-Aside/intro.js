/*
                             Intro
                             -----

Syntax Parsers: 
---------------
A program that reads your code and determines what it does and if it's
grammar is valid.

Your program isn't magic. Someone else wrote a program to translate it for the computer

Your Code ---> Extra Stuff ---> Computer Instructions


Lexical Environment:
--------------------
Whrere the code is physically written. 


Execution Context:
------------------
A wrapper to help manage the code which is running.

There are lots of Lexical Environments. Which one is currently running is managed
by Execution Context.

It can contains things beyond you've written in your code. 


Name/Value Pair: A name which maps to a unique value.

Object: A collection of Name/Value pairs.

Global Environment:
-------------------
Base execution context is global execution context.

Global execution context creates two things for you by the javascript engine:
> Global object (window)
> A special variable 'this' 

At global level, both are same (window = this)

Global means 'not inside a function'.

Another important thing is created by the engine which is,
'a link to the Outer Environment'.

Inside a function, outer environment is outside the function.
In global level, 'Outer Environment' is null.

And finally the execution context runs 'your code'.


Single Threaded Synchronous:
----------------------------
Single Thread:
One Command At A Time.

Synchronous:
One At A Time and in order.

* Javascript is single threaded synchronous executoin in it's behaviour.

Asynchronous:
-------------
More Than One At A Time.

Scope:
------
Where a variable is available in your code.
And if it's truly same variable, or a new copy.




*/