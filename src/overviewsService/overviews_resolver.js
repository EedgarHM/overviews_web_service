/**
# [Web Service Name]
	
## Description

[Description details]

## Usage 

```javascript
&function(Parameters, if any);
```

## Arguments/Parameters

__[Name]:__ [Description]
__[Name]:__ [Description]

## Examples

[Example details]

## Return 

__[Type]:__ [Name]
[Description (if necessary)]

## Category

RegulonDB datamart web service

## License

MIT License

## Author 

RegulonDB Team: [full developer name]
**/


/**
	
# Functions description

## [Function name]

__Description:__ 

[Description of the function]


__Usage:__

```javascript
&function(Parameters, if any);
```

__Input arguments/parameters:__ 

__[Name]:__ [Description]
__[Name]:__ [Description]

__Return:__ 

__[Type]:__ [Name]
[Description (if necessary)]
**/

import {overviewsController} from '../overviewsService/overviews_controller';
export const overviewsResolver = {
    Query: {
        getAllObjectInfo : (root) => overviewsController.getAllObjectInfo(),

        getOverview : (root,{_id}) => overviewsController.getOverview(_id)
   
   
    }
}