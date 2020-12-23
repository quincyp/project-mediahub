# Media Hub

## Technology Used

1. JavaScript
2. HTML
3. CSS, Bootstrap
4. EJS
5. Github
6. Node and modules: express, Mongoose, bcryptjs

## User Stories

As a user we want create a media hub where users can enter:
- the name of the movie/tv series/media
- they can note their comments/feedback/opinion on the media

## Wireframe 
![wireframe](./wireframe.png "wireframe")

## Entity Relationship Diagram (ERD)
<!-- ![ERD](./ERD.drawio "ERD") -->
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;page&quot;:0,&quot;toolbar&quot;:&quot;pages zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;b02e3e31-ea7d-4d50-971c-23dbe1db4f56\&quot; modified=\&quot;2020-12-23T16:50:32.608Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.52.1 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36\&quot; etag=\&quot;qsAx6ZZjB4-1woeh78og\&quot; version=\&quot;13.10.0\&quot; type=\&quot;embed\&quot; pages=\&quot;2\&quot;&gt;&lt;diagram id=\&quot;B1K5O-suWjwk8hi2xKJn\&quot; name=\&quot;Page-1\&quot;&gt;&lt;mxGraphModel dx=\&quot;331\&quot; dy=\&quot;542\&quot; grid=\&quot;1\&quot; gridSize=\&quot;10\&quot; guides=\&quot;0\&quot; tooltips=\&quot;1\&quot; connect=\&quot;1\&quot; arrows=\&quot;1\&quot; fold=\&quot;1\&quot; page=\&quot;1\&quot; pageScale=\&quot;1\&quot; pageWidth=\&quot;850\&quot; pageHeight=\&quot;1100\&quot; math=\&quot;0\&quot; shadow=\&quot;0\&quot;&gt;&lt;root&gt;&lt;mxCell id=\&quot;0\&quot;/&gt;&lt;mxCell id=\&quot;1\&quot; parent=\&quot;0\&quot;/&gt;&lt;mxCell id=\&quot;7\&quot; value=\&quot;Movie\&quot; style=\&quot;swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;align=center;fontSize=14;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;70\&quot; y=\&quot;200\&quot; width=\&quot;160\&quot; height=\&quot;160\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;10\&quot; value=\&quot;Name: String(required)\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;7\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;26\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;hNwu3voebFOdJBXhnV__-57\&quot; value=\&quot;Detail: String\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;7\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;56\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;hNwu3voebFOdJBXhnV__-55\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=-0.167;entryDx=0;entryDy=0;entryPerimeter=0;\&quot; parent=\&quot;7\&quot; source=\&quot;7\&quot; target=\&quot;10\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;56\&quot; value=\&quot;Year: Number\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;7\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;86\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;8\&quot; value=\&quot;Comment: ref Comments\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;7\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;116\&quot; width=\&quot;160\&quot; height=\&quot;44\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;45\&quot; value=\&quot;Comments\&quot; style=\&quot;swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;align=center;fontSize=14;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;320\&quot; y=\&quot;110\&quot; width=\&quot;160\&quot; height=\&quot;146\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;57\&quot; value=\&quot;Title: String(required)\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;45\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;26\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;46\&quot; value=\&quot;Body: String (required)\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;45\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;56\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;58\&quot; value=\&quot;Author: String\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;45\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;86\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;48\&quot; value=\&quot;Movie: ref Movie\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;45\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;116\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;54\&quot; value=\&quot;\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;entryX=-0.025;entryY=0.86;entryDx=0;entryDy=0;entryPerimeter=0;\&quot; parent=\&quot;1\&quot; source=\&quot;8\&quot; target=\&quot;58\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;100\&quot; height=\&quot;100\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;480\&quot; y=\&quot;531\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;310\&quot; y=\&quot;215\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;59\&quot; value=\&quot;User\&quot; style=\&quot;swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;align=center;fontSize=14;\&quot; parent=\&quot;1\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry x=\&quot;70\&quot; y=\&quot;40\&quot; width=\&quot;160\&quot; height=\&quot;116\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;60\&quot; value=\&quot;Username: String(required)\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;59\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;26\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;61\&quot; value=\&quot;email: String(required)\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;59\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;56\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;62\&quot; style=\&quot;edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=-0.167;entryDx=0;entryDy=0;entryPerimeter=0;\&quot; parent=\&quot;59\&quot; source=\&quot;59\&quot; target=\&quot;60\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry relative=\&quot;1\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;63\&quot; value=\&quot;password: String(required)\&quot; style=\&quot;text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;\&quot; parent=\&quot;59\&quot; vertex=\&quot;1\&quot;&gt;&lt;mxGeometry y=\&quot;86\&quot; width=\&quot;160\&quot; height=\&quot;30\&quot; as=\&quot;geometry\&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;68\&quot; value=\&quot;\&quot; style=\&quot;edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;\&quot; parent=\&quot;1\&quot; source=\&quot;63\&quot; target=\&quot;7\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;100\&quot; height=\&quot;100\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;20\&quot; y=\&quot;190\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;50\&quot; y=\&quot;250\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=\&quot;69\&quot; value=\&quot;\&quot; style=\&quot;edgeStyle=elbowEdgeStyle;fontSize=12;html=1;endArrow=ERmandOne;entryX=-0.017;entryY=0.873;entryDx=0;entryDy=0;entryPerimeter=0;\&quot; parent=\&quot;1\&quot; target=\&quot;57\&quot; edge=\&quot;1\&quot;&gt;&lt;mxGeometry width=\&quot;100\&quot; height=\&quot;100\&quot; relative=\&quot;1\&quot; as=\&quot;geometry\&quot;&gt;&lt;mxPoint x=\&quot;230\&quot; y=\&quot;60\&quot; as=\&quot;sourcePoint\&quot;/&gt;&lt;mxPoint x=\&quot;330\&quot; y=\&quot;-40\&quot; as=\&quot;targetPoint\&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;/root&gt;&lt;/mxGraphModel&gt;&lt;/diagram&gt;&lt;diagram id=\&quot;4HWdiZGA7cV4rlA32Vsm\&quot; name=\&quot;Page-2\&quot;&gt;&amp;#xa;        &amp;#xa;        &amp;#xa;&amp;#xa;&amp;#xa;        &lt;mxGraphModel dx=\&quot;176\&quot; dy=\&quot;229\&quot; grid=\&quot;1\&quot; gridSize=\&quot;10\&quot; guides=\&quot;1\&quot; tooltips=\&quot;1\&quot; connect=\&quot;1\&quot; arrows=\&quot;1\&quot; fold=\&quot;1\&quot; page=\&quot;1\&quot; pageScale=\&quot;1\&quot; pageWidth=\&quot;850\&quot; pageHeight=\&quot;1100\&quot; math=\&quot;0\&quot; shadow=\&quot;0\&quot;&gt;&amp;#xa;            &amp;#xa;            &amp;#xa;&amp;#xa;&amp;#xa;            &lt;root&gt;&amp;#xa;                &amp;#xa;                &amp;#xa;&amp;#xa;&amp;#xa;                &lt;mxCell id=\&quot;-eorJkuldFPhp2_ggRFo-0\&quot;/&gt;&amp;#xa;                &amp;#xa;                &amp;#xa;&amp;#xa;&amp;#xa;                &lt;mxCell id=\&quot;-eorJkuldFPhp2_ggRFo-1\&quot; parent=\&quot;-eorJkuldFPhp2_ggRFo-0\&quot;/&gt;&amp;#xa;                &amp;#xa;                &amp;#xa;&amp;#xa;&amp;#xa;            &lt;/root&gt;&amp;#xa;            &amp;#xa;            &amp;#xa;&amp;#xa;&amp;#xa;        &lt;/mxGraphModel&gt;&amp;#xa;        &amp;#xa;        &amp;#xa;&amp;#xa;&amp;#xa;    &lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>



## Stretch Goals To-do

-User story 

- Verify full CRUD functionality

- Look into Heroku deployment

<!-- --Show.ejs no image if logic needs to be added -->
<!-- --Increase text area of comment body -->
--Make index images clickable links (tried wrapping img in </a> not working!)
<!-- --Remove image not found fake title -->
<!-- --Add login CSS -->
<!-- --Add register CSS -->
<!-- --Details text box edit/new -->

<!-- - Remove user author, auto fill with logged in user -->

- Redo coloring of dark gray text in overall CSS [look at subheading and overview text in particular]
    - Update link colors

- Fix comment section CSS add margin/padding

- Fix fully responsive sizing

<!-- - Add Font Awesome Icons -->
    <!-- -- Add as logo too -->
    <!-- -- Create/Edit/Delete icon buttons -->

<!-- - Redo logout button CSS
    - remove the background
    - align right on all nav pages -->

- Delete Comment CRUDs?
    - comment index.ejs
    - comment show.ejs

- Look into new fonts?
