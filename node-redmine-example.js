const Redmine = require('node-redmine');
const hostname = process.env.REDMINE_HOST || 'https://gestionar.ingeniumcodex.com';
const config = { apiKey: process.env.REDMINE_APIKEY || 'api-key' };
const redmine = new Redmine(hostname, config);
const dump_issue = (issue) => {
  console.log('Dumping issue:');
  for (let item in issue) console.log('  ' + item + ': ' + JSON.stringify(issue[item]));
};
redmine.issues({ limit: 2 }, function (err, data) {
  if (err) throw err;
  for (let i in data.issues) dump_issue(data.issues[i]);
  console.log('total_count: ' + data.total_count);
});