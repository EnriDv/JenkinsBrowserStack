# Automatización con Appium Jenkins y Browserstack

El presente proyecto esta hecho para practicar los scripts de automatización con appium y webdriverio con la aplicación del reloj en android. Añadiendo un capa mas de abstracción como lo es cucumber y sus `features`

## Configuracion Appium local

Instale todas las dependencias con:

```shell
npm install
```

Es necesario crear un archivo de variables de entorno.
Se puede copiar la estructura de `.env.example` con el siguiente comando:

```shell
cp .env.example .env
```

### Ejemplo del archivo .env

```
PLATFORM_NAME=Android
APPIUM_PLATFORM_VERSION=16.0
APPIUM_DEVICE_NAME=Medium Phone
APPIUM_AUTOMATION_NAME=UiAutomator2
APPIUM_APP_PACKAGE=com.google.android.deskclock
APPIUM_APP_ACTIVITY=com.android.deskclock.DeskClock
```

### Configuraciones adicionales

- Se ha modificado el numero maximo de instancias a `1` para poder ejecutar los test con `npm run wdio`

## Ejecución

Para ejecutar todos los test, ejecute el siguiente comando:

```shell
npm run wdio
```

Para ejecutar features o escenarios con un `tag` en especifico:

```shell
npx wdio ./wdio.conf.js --cucumberOpts.tags="@Tag"
```

## Appium inspector

En caso de usar el appium inspector, dejo un ejemplo sobre la configuración para poder usarlo inmediatamente

```js
{
  "platformName": "Android",
  "appium:platformVersion": "16.0",
  "appium:deviceName": "Medium Phone",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.google.android.deskclock",
  "appium:appActivity": "com.android.deskclock.DeskClock"
}
```

## Nuevos scripts

Se han añadido scripts para:
- Probar el protector de pantalla
- Cambiar configuraciones del reloj y otros elementos
- Eliminación de tarjetas por medio de las opciones adicionales en la configuración de la hora de sueño

## Configuración Browserstack

Siga los mismos pasos para instalar las dependencias con el servidor de appium local. Después configure las variables de entorno para agregar su usuario y llave de acceso de browserstack. 

A su vez, configure la ruta de la apk a probar o suba su apk a browserstack y obtenga su id.

Ejemplo del esquema del .env

```
BROWSERSTACK_USERNAME=browserstack_username
BROWSERSTACK_ACCESS_KEY=browserstack_access_key
APP=app_apk_path
```

Puede modificar los capabilities a su gusto para añadir o modificar los dispositivos donde se va a probar la apk.

```js
'bstack:options': {
    deviceName: 'Google Pixel 10',
    platformVersion: '16.0',
    platformName: 'android',
}
```

En la parte de servicios es recomendable cambiar los parámetros relacionados al proyecto.

```js
['browserstack', 
    {
        app: process.env.APP,
        browserstacklocal: true,
        accessibility: false,
        testObservabilityOptions: {
            buildName: 'Clock test',
            projectName: 'Clock Jenkins',
            buildTag: 'automation'
        }
    }
]
```

### Ejecución

Una vez configrurado todo, puede ejecutar los test con los comandos:

```shell
npx wdio ./wdio.browserstack.conf.js
```

```shell
npx wdio ./wdio.browserstack.conf.js --cucumberOpts.tags="@Tag"
```

> **Nota:** Browserstack reinicia la captura de video de una prueba si es que se recarga una nueva sesión . Sin embargo, esto no afecta al proceso de la prueba, pero puede dificultar el proceso de debug. Además de que pueden existir errores con la activity dependiendo de la versión del dispositivo.

> Se van a reducir el numero de pruebas para hacer más rápido el flujo de automatización.
