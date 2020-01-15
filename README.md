FenixEdu Admissions
=========

> Admissions Module for Application Family

## Using this module

To use this module, follow the steps below:

- Install the module:

```sh
mvn clean install
```
- Add this module to fenix-webapp [pom.xml](https://github.com/ist-dsi/fenix-webapp/blob/master/pom.xml) dependencies list:

```xml
<dependency>
    <groupId>org.fenixedu</groupId>
    <artifactId>fenixedu-admissions</artifactId>
    <version>DEV-SNAPSHOT</version>
</dependency>
```
- Change the tomcat maven plugin path config on your webapp pom.xml:

```xml
<plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
    <configuration>
        <path>/</path> <!-- Was '/fenix' before, it is required to be only '/' -->
        <port>8080</port>
        <uriEncoding>UTF-8</uriEncoding>
    </configuration>
</plugin>
```
- Run your webapp and install the funcionality ``FenixEdu Admissions Frontend`` in the portal.

## Troubleshooting

Installing this module will trigger npm scripts to install the frontend, therefore, if there are some errors while ``mvn clean install``, the requirements for the frontend application are available [here](https://github.com/fenixedu/fenixedu-admissions/blob/master/src/main/frontend/README.md).