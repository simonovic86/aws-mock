'use strict';

exports.startInstances = function(instanceIDs, ec2, fnCallback) {
    // start existing powered-off instances by given IDs
    ec2.startInstances({
        InstanceIds: instanceIDs
    },
    function getStartingInstances(err, resp) {
        /*jshint unused:vars */
        if(err){
            console.log(err);
        }else{
            fnCallback(resp.StartingInstances);
        }
    });
};

