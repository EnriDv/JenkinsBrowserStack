pipeline {
    agent any

    environment {
        ALLURE_RESULTS = "${env.WORKSPACE}\\allure-results"
        ALLURE_REPORT = "${env.WORKSPACE}\\allure-report"

        BROWSERSTACK_USERNAME = credentials('browserstack-username')
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-access-key')
        
        APP_PATH='bs://e988d6961cb979787f58f643a43f413f344affab'
    }

    stages {

        stage('Clean') {
            steps {
                echo 'Limpiando workspace'
                deleteDir()
            }
        }
        
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/EnriDv/JenkinsBrowserStack.git'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npx wdio wdio.browserstack.conf.js --cucumberOpts.tags="@Smoke"'
            } 
        }

        stage('Report') {
            steps {
                echo "Generando Reporte"
                bat "npx allure generate %ALLURE_RESULTS% -c -o %ALLURE_REPORT%"
            }
        }

        stage('Publish report') {
            steps {
                echo "Publicando Reporte"
                allure includeProperties: 
                    false,
                    jdk: '',
                    results: [[path: 'allure-results']] 
            }
        }
    }

    post {
        always {
            echo "Finalizado"
        }
    }
}