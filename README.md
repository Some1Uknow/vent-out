![VentOut Logo](/public/VentOut-logo.svg "VentOut Logo")


# VentOut

VentOut is a platform that provides a safe space for individuals to express their emotions and receive support from others. It aims to create a positive and empathetic community where users can share their thoughts and feelings without fear of judgment.

## Features

### Positive Comment Reinforcement
- Users can only post positive comments, fostering a supportive environment.
- Negative or harmful comments are automatically filtered out.

### Community Support
- Users can join groups with similar experiences to connect and support each other.
- Group moderators ensure a safe and respectful environment within the groups.

### Instant Psychologist Contact
- Provides a platform for users to instantly contact psychologists or mental health professionals for serious help.
- Users can schedule appointments or request immediate assistance.

### Secure and Private
- Ensures user privacy and data security through robust encryption and privacy measures.
- Compliant with relevant data protection regulations (e.g., GDPR, HIPAA).

## Tech Stack

### Frontend
- **Framework:** React.js
- **State Management:** Redux
- **Styling:** CSS Modules, Tailwind CSS

### Backend
- **Framework:** Node.js
- **Web Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

### Prerequisites
- Node.js (v14 or higher) and npm installed
- MongoDB installed and running

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/ventout.git
```

2. Navigate to project directory 
 ```bash
cd ventout
```
   
3. Install dependencies:
```bash
   npm install
```
4. Configuration
Create a .env file in the root directory with the following environment variables:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
MONGODB_URL=
NEXTAUTH_URL=http://localhost:{PORT_THE_APP_IS_RUNNING_ON}/
NEXT_PUBLIC_API_KEY=
```

5. Run the development server:
```bash
npm run dev
```



   

