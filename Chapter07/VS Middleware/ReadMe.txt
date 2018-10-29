Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.

The first time you open project in visual studio
Right Click on the npm folder under the Dependencies node in
Solution Explorer and then select "Restore Packages".
Then you must install the "Microsoft.AspNetCore.SpaServices".
Version must be the same as the Asp.net Core installed. 
For instance, withe version 2.1.1 you must install the
same 2.1.1 version of the package


Code is as after the installation of VS Middleware

That is, with WebPack bundler being automatically launched 
when project is run.


