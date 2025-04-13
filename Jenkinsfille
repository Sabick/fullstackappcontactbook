pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'

                // This will work with a public repo, and will also use credentials if needed
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], // Change to your actual branch name if not 'main'
                    userRemoteConfigs: [[
                        url: 'https://github.com/Sabick/fullstackappcontactbook.git',
                        credentialsId: 'github-access' // Optional: remove if not using token
                    ]]
                ])
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker containers...'
                sh 'docker-compose build'
            }
        }

        stage('Run Docker Containers') {
            steps {
                echo 'Starting application containers...'
                sh 'docker-compose up -d'
            }
        }

        stage('Verify Services') {
            steps {
                echo 'Checking running services...'
                sh 'docker-compose ps'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace (not stopping containers)...'
            cleanWs()
        }
    }
}
