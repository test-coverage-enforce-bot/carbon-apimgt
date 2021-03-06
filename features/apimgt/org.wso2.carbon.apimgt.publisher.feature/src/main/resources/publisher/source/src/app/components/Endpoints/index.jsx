/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EndpointsListing from './Listing';
import EndpointDetails from './Details';
import EndpointCreate from './Create';
import EndpointsDiscover from './Discover';
import { PageNotFound } from '../Base/Errors';

const Endpoints = () => {
    return (
        <Switch>
            <Route exact path='/endpoints' component={EndpointsListing} />
            <Route path='/endpoints/create' component={EndpointCreate} />
            <Route path='/endpoints/discover' component={EndpointsDiscover} />
            <Route path='/endpoints/:endpoint_uuid/' component={EndpointDetails} />
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default Endpoints;
