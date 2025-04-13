pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Sabick/fullstackappcontactbook.git',
                        credentialsId: 'github-access'
                    ]]
                ])
            }
        }

        stage('Install Docker Compose') {
            steps {
                echo 'Installing Docker Compose...'
                sh '''
                    if ! command -v docker-compose &> /dev/null
                    then
                        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                        chmod +x /usr/local/bin/docker-compose
                    fi
                '''
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
