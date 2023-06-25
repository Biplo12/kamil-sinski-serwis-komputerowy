# Documentation: Kamil Sinski Serwis Komputerowy

## Overview
Kamil Sinski Serwis Komputerowy is a computer service company website that has been remade using Tailwind, TypeScript, and Next.js. The website provides various features for both customers and administrators, including order tracking, service information, contact forms, and an admin dashboard for managing orders and users. Deployed website is available at [https://www.kamilsinski.pl/](https://www.kamilsinski.pl/).

## Features

### Frontend
The frontend of the website consists of the following pages:

1. **Landing Page**: The main page of the website that provides an introduction to Kamil Sinski Serwis Komputerowy and highlights its services and expertise.
2. **About Us**: A page that provides information about the company, its history, mission, and team members.
3. **Why Us**: This page highlights the unique selling points of the company, emphasizing why customers should choose Kamil Sinski Serwis Komputerowy over competitors.
4. **Our Services**: A comprehensive list of services offered by the company, including computer diagnostics, repairs, maintenance, and more.
5. **Contact Form**: A form where customers can fill in their details and send inquiries or service requests to the company.
6. **Order Status**: A feature that allows customers to check the status of their orders by entering the order number. The possible statuses include: diagnosing, diagnosed, repairing, repaired, and finished.
7. **Responsive Design**: The website is fully responsive, ensuring a consistent and user-friendly experience across different devices and screen sizes.

### Admin Dashboard
The admin dashboard provides a secure and restricted area for authorized administrators to manage orders and users. 

The admin dashboard includes the following sections and functionality:

1. **Dashboard Overview**: A summary of important statistics, including total orders, active orders, total users, and website visits. This section also displays a percentage comparison with the previous month.
2. **Charts**: Visual representations of order and user data, allowing administrators to analyze trends and patterns.
3. **Recent Orders**: A section that displays the most recent orders, providing quick access to their details.
4. **Manage Orders**: A sidebar menu item that leads to a table listing all orders with primary information. Administrators can delete orders and edit order details, including the status.
5. **Edit Order**: An interface for modifying order information, such as customer details, service type, and order status.
6. **Create New Order**: A feature to create new orders and add them to the system.
7. **Manage Users**: Similar to the Manage Orders section, this allows administrators to view and manage user accounts.

## Backend
The backend of the website is built using Next.js serverless functions and utilizes MongoDB with Prisma as the database. Serverless functions enable the execution of server-side logic and API endpoints without the need for dedicated server infrastructure. Prisma serves as the data access layer, providing a convenient and type-safe way to interact with the database.

The backend functionality includes but is not limited to:

1. Handling contact form submissions and storing them in the database for later retrieval.
2. Managing user authentication and authorization for the admin dashboard.
3. Storing and retrieving order information, including status updates, from the database.
4. Generating statistical data for the admin
