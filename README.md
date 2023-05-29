# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

4. What is PDF-Annotation?
- PDF annotation is adding suggestions in the form of comments or digital sticky notes to PDF documents in the proofing stage.  Basically, PDF annotation refers to providing contextual feedback right inside deliverables in PDF format.

Types of PDF-Annotation  
    There are two types of PDF annotations: markups and non-markup annotations.

    - Markup annotations
        There are three types of markup annotations:

        Free text annotations which placed on text in a PDF file.

        Pop-up associated annotations include Text, Line, Square, Circle, Highlight, Underline, Strikeout, RubberStamp, Caret, Ink, and File Attachments.

        Text Markup annotations are a subtype of pop-up associated annotations and contain one or more words in a document upon which the pop-up is associated with. They also include markup annotations such as Underline, Strikeout, Caret, Squiggly, etc.

        Sounds annotations do not have a pop-up window but may have associated text specified by the Contents entry.

    - Non-markup annotations
        Pop-up annotations typically do not appear by themselves and have a parent property which is associated to a markup annotation.

        If no parent association is defined for a pop-up annotation, the Viewer may use the pop-up annotation's content as the text for the annotation.

5. Problem we’ll be solving

    - We are currently in our analysing phase for this task, we will be building a pdf annotator / comment option for the pdf,  where we will add various methods to comment, add watermark text highlight, sticky notes and so on.

6. What kind of pdf-annotate we will be doing for this task?
    1. Text Mark up (text highlight, underline, strike-out)
    2. Sticky Out (commnet, notes)
    3. Shapes (cricle, square)
    4. Free text (text box, type write)
    5. Path (line, polygon, polyline)
    6. Rubber Stamp/Watermark

7. How will we be doing it ?

-    We will be using Node and express for our backend task, and pdfAnnotate as our main library,
    more over typeorm as our database and other express and node libraries to read and to write files plus side by side we will be using pdf-lib, PdfJsAnnotate and other libraries in the backend. 

8. Current status

    In Progress
    Analysing, Developing

9. Timeline

    Will probably start from coming Monday


10. References were taken from 
    - https://docs.devexpress.com/OfficeFileAPI/119122/pdf-document-api/annotations
    - https://instructure.github.io/pdf-annotate.js/
# pdf-annotate
