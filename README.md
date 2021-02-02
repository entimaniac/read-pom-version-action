# Read Pom Version

This action reads the `pom.xml` from the root of your project and extracts the project version.
The `pom.xml` is expected to look like:

```xml
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <groupId>com.example</groupId>
    <artifactId>wow</artifactId>
    <version>2.0.0</version>
    ...
```

We can see that the version of this project is `2.0.0`


## Outputs

### `version`

The version of the project.

`${{ steps.yourStepIdGoesHere.outputs.version }}`

## Example usage

```yaml
- name: Get Version
        uses: ./
        id: getVersion
- name: Print the version
        run: echo "The version we just got is ${{ steps.getVersion.outputs.version }}"
```