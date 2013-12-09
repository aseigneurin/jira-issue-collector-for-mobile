jira-issue-collector-for-mobile
===============================

[JIRA Issue Collectors](https://marketplace.atlassian.com/plugins/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin) are great but they [don't work on small screens](https://answers.atlassian.com/questions/162900/issue-collector-submit-button-problems-with-mobile-devices). This project intends at providing a replacement for the UI, still reusing the same backend.

## Prerequesites

Set up a JIRA collector in your JIRA instance.

You will need to know what URL this collectors is posting to. This should be something like: http://&lt;server URL&gt;/rest/collectors/1.0/template/form/&lt;collector ID&gt;

Example URL: http://jira.example.com/rest/collectors/1.0/template/form/91469fa2

## Usage

Copy the following snippet and paste it in the &lt;head&gt; of your HTML page, replacing the &lt;URL of the collector&gt; with the appropriate value:

    <script type="text/javascript">
      var collectorUrl = "<URL of the collector>";
    </script>
    <script type="text/javascript" async src="jira-issue-collector-for-mobile.js"></script>