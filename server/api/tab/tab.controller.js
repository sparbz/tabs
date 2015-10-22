'use strict';

var _ = require('lodash');
var Tab = require('./tab.model');

// Get list of tabs
exports.index = function(req, res) {
  Tab.find(function (err, tabs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(tabs);
  });
};

// Get a single tab
exports.show = function(req, res) {
  Tab.findById(req.params.id, function (err, tab) {
    if(err) { return handleError(res, err); }
    if(!tab) { return res.status(404).send('Not Found'); }
    return res.json(tab);
  });
};

// Get a single tab by short ID
exports.showsid = function(req, res) {
  var query = { 'shortID': req.params.id };
  Tab.findOne(query, function (err, tab) {
    if(err) { return handleError(res, err); }
    if(!tab) { return res.status(404).send('Not Found'); }
    return res.json(tab);
  });
};

// Creates a new tab in the DB.
exports.create = function(req, res) {
  Tab.create(req.body, function(err, tab) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(tab);
  });
};

// Updates an existing tab in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  // Tab.findById(req.params.id, function (err, tab) {
  //   if (err) { return handleError(res, err); }
  //   if(!tab) { return res.status(404).send('Not Found'); }
  //   var updated = _.merge(tab, req.body);
  //   updated.save(function (err) {
  //     if (err) { return handleError(res, err); }
  //     return res.status(200).json(tab);
  //   });
  // });
  Tab.update({ _id: req.params.id }, req.body, function (err, tab) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(tab);
  });
};

// Deletes a tab from the DB.
exports.destroy = function(req, res) {
  Tab.findById(req.params.id, function (err, tab) {
    if(err) { return handleError(res, err); }
    if(!tab) { return res.status(404).send('Not Found'); }
    tab.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}