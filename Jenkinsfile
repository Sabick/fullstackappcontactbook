pipeline {
    agent any

    environment {
        DOCKER_HOST = "tcp://docker:2376"
        DOCKER_TLS_VERIFY = "1"
        DOCKER_CERT_PATH = "/certs/client"
        COMPOSE_FILE = "/workspace/docker-compose.yml"
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
                echo 'Installing Docker Compose if not available...'
                sh '''
                    if ! command -v docker-compose &> /dev/null; then
                        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                        chmod +x /usr/local/bin/docker-compose
                    fi
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker containers...'
                sh 'docker-compose -f $COMPOSE_FILE build'
            }
        }

        stage('Run Docker Containers') {
            steps {
                echo 'Starting application containers...'
                sh 'docker-compose -f $COMPOSE_FILE up -d'
            }
        }

        stage('Verify Services') {
            steps {
                echo 'Listing running containers...'
                sh 'docker-compose -f $COMPOSE_FILE ps'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Jenkins workspace (not containers)...'
            cleanWs()
        }
    }
}
