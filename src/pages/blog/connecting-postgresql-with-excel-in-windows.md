---
date: 2021-03-01T00:36:21.283Z
title: Connecting PostgreSQL with Excel in Windows
image: /img/postgres-excel.png
tags:
  - PostgreSQL
  - Excel
---
<!--StartFragment-->

If you are reading this, then probably you are looking for a way to make it easier for you and your co-workers getting the data from your PostgreSQL server, either just copying table from it or make a dashboard from the pivot table.

<br/>

Before we start, there is some prerequisite to keep in mind.

1. Your PostgreSQL server can be accessed from the outside, meaning you can make a query from your computer to the PostgreSQL server.
2. MS. Office 2016 version or Higher
3. PostgreSQL ODBC Server ([download and install the latest version from here](https://www.postgresql.org/ftp/odbc/versions/msi/))

<br/>

Assuming, you already have all the the requirement above lets get into it.

<br/>

![](/img/odbc.png)

<br/>

First, lets open the ODBC, go into the System DSN tab, and click add. If you installed the PostgreSQL ODBC server correctly you will see the PostgreSQL name on it. Choose the PostgreSQL ANSI one that suitable for your windows version either 32-bit or 64-bit.

<br/>

![](/img/odbc2.png)

<br/>

Second, give your Data Source a name and note it down, we will use it later in the Excel. For the Database you have to fill it with the name of the database you want to connect from the server, for the Server and Port option are the IP Address and Port of your database server. Click test after you fill it all, if your config is correct will show connection successful like the image above. If not, make sure your database can be accessed from the outside, database name, IP address and port are exactly the same with the PostgreSQL server.

<br/>

![](/img/power_pivot.png)

<br/>

Third, Make sure your Power Pivot available to use. Go into **File > Option > Customize Ribbon** and From the right part of the column, make sure it is checked and press OK.

<br/>

![](/img/power-pivot-tab.png)

<br/>

After that go into the Power Pivot tab or ribbon and choose Manage. It will open a new window for you.

<br/>

![](/img/data-model.png)

<br/>

From the Home tab or ribbon choose the **From Other Sources** and choose the **Others (OLED/ODBC)** connection and click next. Give connection a name, click Build, navigate to the Provider tab and choose Microsoft OLE DB Provider for ODBC Drivers, click next or navigate to the Connection tab. On the Specify the source of data click the drop down from the Use data source name and you will see the name of the server that we made from the first step of this guide and test the connection. If it is not connected or error out. Please make sure again you config it correctly from the first step of this guide.

<br/>

![](/img/data-model2.png)

<br/>

Click OK to exit the Data Link properties config and click next to proceed further. After that you can choose to just select a table from your PostgreSQL server or write the query with SQL manually. Lets just choose to write query manually for now to make it more flexible and validate the SQL query you wrote, after its validated, click Finish and close the Table Import Wizard.

<br/>

![](/img/pivot-table-chart.png)

<br/>

Now you will see your table imported on the excel data model. Our next step is to import it as a pivot table on our excel sheet. Click the Pivot Table from the Home tab or ribbon on your data model and choose existing worksheet, then you can drag and drop from your query to row and column of your choosing. To make it even further, click on any cell inside your pivot table and navigate to the Analyze tab or ribbon, click the pivot chart and choose your suitable chart type, click OK and we are Done!

<br/>

Now, you can share your data with your co-workers from your PostgreSQL easily. Just make sure you hit Refresh on the Data tab/ribbon to keep your data updated.

<br/>

Good Luck!

<!--EndFragment-->