Add the file tree to an Asp.net core project.
Put each file in the same Asp.net core folder it is here.

The first time you open project in visual studio
Right Click on the npm folder under the Dependencies node in
Solution Explorer and then select "Restore Packages".
Then you must install the "Microsoft.AspNetCore.SpaServices".
Version must be the same as the Asp.net Core installed. 
For instance, with version 2.1.1 you must install the
same 2.1.1 version of the package


Code is as at the end of chapter

That is, with WebPack bundler being automatically launched 
when project is run. All bundler optimizations applied, included
all library files put in a library bundle. Then 
item template is bundled as an html file, 
a banner is added to ToFo page and bundled with WebPack, 
and WebPack bundles also all project CSS.

Just project is not modified for triggering WebPack in
production mode when project is published. To Do so let
follow instructions in the "Production and development configurations"
section.


