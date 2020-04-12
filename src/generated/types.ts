import {
  EndpointInterface,
  Endpoints,
  RequestParameters,
} from "@octokit/types";

export type RestEndpointMethodTypes = {
  actions: {
    cancelWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/actions/runs/:run_id/cancel"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/actions/runs/:run_id/cancel"]["response"];
    };
    createOrUpdateSecretForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/actions/secrets/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/actions/secrets/:name"]["response"];
    };
    createRegistrationToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/actions/runners/registration-token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/actions/runners/registration-token"]["response"];
    };
    createRemoveToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/actions/runners/remove-token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/actions/runners/remove-token"]["response"];
    };
    deleteArtifact: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/actions/artifacts/:artifact_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/actions/artifacts/:artifact_id"]["response"];
    };
    deleteSecretFromRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/actions/secrets/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/actions/secrets/:name"]["response"];
    };
    downloadArtifact: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format"]["response"];
    };
    getArtifact: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/artifacts/:artifact_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/artifacts/:artifact_id"]["response"];
    };
    getPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/secrets/public-key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/secrets/public-key"]["response"];
    };
    getSecret: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/secrets/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/secrets/:name"]["response"];
    };
    getSelfHostedRunner: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runners/:runner_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runners/:runner_id"]["response"];
    };
    getWorkflow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/workflows/:workflow_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/workflows/:workflow_id"]["response"];
    };
    getWorkflowJob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/jobs/:job_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/jobs/:job_id"]["response"];
    };
    getWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id"]["response"];
    };
    listArtifactsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/artifacts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/artifacts"]["response"];
    };
    listDownloadsForSelfHostedRunnerApplication: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runners/downloads"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runners/downloads"]["response"];
    };
    listJobsForWorkflowRun: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id/jobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id/jobs"]["response"];
    };
    listRepoWorkflowRuns: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runs"]["response"];
    };
    listRepoWorkflows: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/workflows"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/workflows"]["response"];
    };
    listSecretsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/secrets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/secrets"]["response"];
    };
    listSelfHostedRunnersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runners"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runners"]["response"];
    };
    listWorkflowJobLogs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/jobs/:job_id/logs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/jobs/:job_id/logs"]["response"];
    };
    listWorkflowRunArtifacts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id/artifacts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id/artifacts"]["response"];
    };
    listWorkflowRunLogs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id/logs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/runs/:run_id/logs"]["response"];
    };
    listWorkflowRuns: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs"]["response"];
    };
    reRunWorkflow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/actions/runs/:run_id/rerun"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/actions/runs/:run_id/rerun"]["response"];
    };
    removeSelfHostedRunner: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/actions/runners/:runner_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/actions/runners/:runner_id"]["response"];
    };
  };
  activity: {
    checkRepoIsStarredByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred/:owner/:repo"]["response"];
    };
    checkStarringRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred/:owner/:repo"]["response"];
    };
    deleteRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/subscription"]["response"];
    };
    deleteThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /notifications/threads/:thread_id/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /notifications/threads/:thread_id/subscription"]["response"];
    };
    getFeeds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /feeds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /feeds"]["response"];
    };
    getRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/subscription"]["response"];
    };
    getThread: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications/threads/:thread_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications/threads/:thread_id"]["response"];
    };
    getThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications"]["response"];
    };
    getThreadSubscriptionForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications/threads/:thread_id/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications/threads/:thread_id/subscription"]["response"];
    };
    listEventsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/events"]["response"];
    };
    listEventsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/events/orgs/:org"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/events/orgs/:org"]["response"];
    };
    listEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/events"]["response"];
    };
    listFeeds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /feeds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /feeds"]["response"];
    };
    listNotifications: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications"]["response"];
    };
    listNotificationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /notifications"]["response"];
    };
    listNotificationsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/notifications"]["response"];
    };
    listOrgEventsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/events/orgs/:org"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/events/orgs/:org"]["response"];
    };
    listPublicEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /events"]["response"];
    };
    listPublicEventsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/events"]["response"];
    };
    listPublicEventsForRepoNetwork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /networks/:owner/:repo/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /networks/:owner/:repo/events"]["response"];
    };
    listPublicEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/events/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/events/public"]["response"];
    };
    listPublicOrgEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/events"]["response"];
    };
    listReceivedEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/received_events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/received_events"]["response"];
    };
    listReceivedPublicEventsForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/received_events/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/received_events/public"]["response"];
    };
    listRepoEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/events"]["response"];
    };
    listRepoNotificationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/notifications"]["response"];
    };
    listReposStarredByAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/starred"]["response"];
    };
    listReposStarredByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/starred"]["response"];
    };
    listReposWatchedByUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/subscriptions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/subscriptions"]["response"];
    };
    listStargazersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/stargazers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/stargazers"]["response"];
    };
    listWatchedReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/subscriptions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/subscriptions"]["response"];
    };
    listWatchersForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/subscribers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/subscribers"]["response"];
    };
    markAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications"]["response"];
    };
    markNotificationsAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications"]["response"];
    };
    markNotificationsAsReadForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/notifications"]["response"];
    };
    markRepoNotificationsAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/notifications"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/notifications"]["response"];
    };
    markThreadAsRead: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /notifications/threads/:thread_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /notifications/threads/:thread_id"]["response"];
    };
    setRepoSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/subscription"]["response"];
    };
    setThreadSubscription: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /notifications/threads/:thread_id/subscription"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /notifications/threads/:thread_id/subscription"]["response"];
    };
    starRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/starred/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/starred/:owner/:repo"]["response"];
    };
    starRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/starred/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/starred/:owner/:repo"]["response"];
    };
    unstarRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/starred/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/starred/:owner/:repo"]["response"];
    };
    unstarRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/starred/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/starred/:owner/:repo"]["response"];
    };
  };
  apps: {
    addRepoToInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/installations/:installation_id/repositories/:repository_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/installations/:installation_id/repositories/:repository_id"]["response"];
    };
    checkAccountIsAssociatedWithAny: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/accounts/:account_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/accounts/:account_id"]["response"];
    };
    checkAccountIsAssociatedWithAnyStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/accounts/:account_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/accounts/:account_id"]["response"];
    };
    checkToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /applications/:client_id/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /applications/:client_id/token"]["response"];
    };
    createContentAttachment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /content_references/:content_reference_id/attachments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /content_references/:content_reference_id/attachments"]["response"];
    };
    createFromManifest: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app-manifests/:code/conversions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app-manifests/:code/conversions"]["response"];
    };
    createInstallationToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /app/installations/:installation_id/access_tokens"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /app/installations/:installation_id/access_tokens"]["response"];
    };
    deleteAuthorization: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /applications/:client_id/grant"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /applications/:client_id/grant"]["response"];
    };
    deleteInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /app/installations/:installation_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /app/installations/:installation_id"]["response"];
    };
    deleteToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /applications/:client_id/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /applications/:client_id/token"]["response"];
    };
    getAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app"]["response"];
    };
    getBySlug: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /apps/:app_slug"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /apps/:app_slug"]["response"];
    };
    getInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/installations/:installation_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/installations/:installation_id"]["response"];
    };
    getOrgInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/installation"]["response"];
    };
    getRepoInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/installation"]["response"];
    };
    getSubscriptionPlanForAccount: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/accounts/:account_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/accounts/:account_id"]["response"];
    };
    getSubscriptionPlanForAccountStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/accounts/:account_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/accounts/:account_id"]["response"];
    };
    getUserInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/installation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/installation"]["response"];
    };
    listAccountsForPlan: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/plans/:plan_id/accounts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/plans/:plan_id/accounts"]["response"];
    };
    listAccountsForPlanStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/plans/:plan_id/accounts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/plans/:plan_id/accounts"]["response"];
    };
    listAccountsUserOrOrgOnPlan: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/plans/:plan_id/accounts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/plans/:plan_id/accounts"]["response"];
    };
    listAccountsUserOrOrgOnPlanStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/plans/:plan_id/accounts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/plans/:plan_id/accounts"]["response"];
    };
    listInstallationReposForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/installations/:installation_id/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/installations/:installation_id/repositories"]["response"];
    };
    listInstallations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /app/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /app/installations"]["response"];
    };
    listInstallationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/installations"]["response"];
    };
    listMarketplacePurchasesForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/marketplace_purchases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/marketplace_purchases"]["response"];
    };
    listMarketplacePurchasesForAuthenticatedUserStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/marketplace_purchases/stubbed"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/marketplace_purchases/stubbed"]["response"];
    };
    listPlans: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/plans"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/plans"]["response"];
    };
    listPlansStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /marketplace_listing/stubbed/plans"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /marketplace_listing/stubbed/plans"]["response"];
    };
    listRepos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /installation/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /installation/repositories"]["response"];
    };
    listSubscriptionsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/marketplace_purchases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/marketplace_purchases"]["response"];
    };
    listSubscriptionsForAuthenticatedUserStubbed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/marketplace_purchases/stubbed"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/marketplace_purchases/stubbed"]["response"];
    };
    removeRepoFromInstallation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/installations/:installation_id/repositories/:repository_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/installations/:installation_id/repositories/:repository_id"]["response"];
    };
    resetToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /applications/:client_id/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /applications/:client_id/token"]["response"];
    };
    revokeInstallationToken: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /installation/token"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /installation/token"]["response"];
    };
  };
  checks: {
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/check-runs"]["response"];
    };
    createSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/check-suites"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/check-suites"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/check-runs/:check_run_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/check-runs/:check_run_id"]["response"];
    };
    getSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/check-suites/:check_suite_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/check-suites/:check_suite_id"]["response"];
    };
    listAnnotations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/check-runs/:check_run_id/annotations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/check-runs/:check_run_id/annotations"]["response"];
    };
    listForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:ref/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:ref/check-runs"]["response"];
    };
    listForSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs"]["response"];
    };
    listSuitesForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:ref/check-suites"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:ref/check-suites"]["response"];
    };
    rerequestSuite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest"]["response"];
    };
    setSuitesPreferences: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/check-suites/preferences"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/check-suites/preferences"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/check-runs/:check_run_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/check-runs/:check_run_id"]["response"];
    };
  };
  codesOfConduct: {
    getAllCodesOfConduct: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct"]["response"];
    };
    getConductCode: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct/:key"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct/:key"]["response"];
    };
    getForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/community/code_of_conduct"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/community/code_of_conduct"]["response"];
    };
    listConductCodes: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /codes_of_conduct"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /codes_of_conduct"]["response"];
    };
  };
  emojis: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /emojis"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /emojis"]["response"];
    };
  };
  gists: {
    checkIsStarred: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id/star"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists/:gist_id/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists/:gist_id/comments"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/:gist_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/:gist_id"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/:gist_id/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/:gist_id/comments/:comment_id"]["response"];
    };
    fork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /gists/:gist_id/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /gists/:gist_id/forks"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id/comments/:comment_id"]["response"];
    };
    getRevision: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id/:sha"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id/:sha"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id/commits"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/gists"]["response"];
    };
    listForks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/:gist_id/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/:gist_id/forks"]["response"];
    };
    listPublic: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/public"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/public"]["response"];
    };
    listPublicForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/gists"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/gists"]["response"];
    };
    listStarred: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gists/starred"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gists/starred"]["response"];
    };
    star: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /gists/:gist_id/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /gists/:gist_id/star"]["response"];
    };
    unstar: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /gists/:gist_id/star"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /gists/:gist_id/star"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /gists/:gist_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /gists/:gist_id"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /gists/:gist_id/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /gists/:gist_id/comments/:comment_id"]["response"];
    };
  };
  git: {
    createBlob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/git/blobs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/git/blobs"]["response"];
    };
    createCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/git/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/git/commits"]["response"];
    };
    createRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/git/refs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/git/refs"]["response"];
    };
    createTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/git/tags"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/git/tags"]["response"];
    };
    createTree: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/git/trees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/git/trees"]["response"];
    };
    deleteRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/git/refs/:ref"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/git/refs/:ref"]["response"];
    };
    getBlob: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/git/blobs/:file_sha"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/git/blobs/:file_sha"]["response"];
    };
    getCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/git/commits/:commit_sha"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/git/commits/:commit_sha"]["response"];
    };
    getRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/git/ref/:ref"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/git/ref/:ref"]["response"];
    };
    getTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/git/tags/:tag_sha"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/git/tags/:tag_sha"]["response"];
    };
    getTree: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/git/trees/:tree_sha"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/git/trees/:tree_sha"]["response"];
    };
    listMatchingRefs: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/git/matching-refs/:ref"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/git/matching-refs/:ref"]["response"];
    };
    updateRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/git/refs/:ref"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/git/refs/:ref"]["response"];
    };
  };
  gitignore: {
    getTemplate: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gitignore/templates/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gitignore/templates/:name"]["response"];
    };
    listTemplates: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /gitignore/templates"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /gitignore/templates"]["response"];
    };
  };
  interactions: {
    addOrUpdateRestrictionsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/interaction-limits"]["response"];
    };
    addOrUpdateRestrictionsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/interaction-limits"]["response"];
    };
    getRestrictionsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/interaction-limits"]["response"];
    };
    getRestrictionsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/interaction-limits"]["response"];
    };
    removeRestrictionsForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/interaction-limits"]["response"];
    };
    removeRestrictionsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/interaction-limits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/interaction-limits"]["response"];
    };
  };
  issues: {
    addAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/issues/:issue_number/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/issues/:issue_number/assignees"]["response"];
    };
    addLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/issues/:issue_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/issues/:issue_number/labels"]["response"];
    };
    checkAssignee: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/assignees/:assignee"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/assignees/:assignee"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/issues"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/issues/:issue_number/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/issues/:issue_number/comments"]["response"];
    };
    createLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/labels"]["response"];
    };
    createMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/milestones"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/comments/:comment_id"]["response"];
    };
    deleteLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/labels/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/labels/:name"]["response"];
    };
    deleteMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/milestones/:milestone_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/milestones/:milestone_number"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/:issue_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/:issue_number"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/comments/:comment_id"]["response"];
    };
    getEvent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/events/:event_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/events/:event_id"]["response"];
    };
    getLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/labels/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/labels/:name"]["response"];
    };
    getMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/milestones/:milestone_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/milestones/:milestone_number"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /issues"]["response"];
    };
    listAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/assignees"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/:issue_number/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/:issue_number/comments"]["response"];
    };
    listCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/comments"]["response"];
    };
    listEvents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/:issue_number/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/:issue_number/events"]["response"];
    };
    listEventsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/events"]["response"];
    };
    listEventsForTimeline: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/:issue_number/timeline"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/:issue_number/timeline"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/issues"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/issues"]["response"];
    };
    listForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues"]["response"];
    };
    listLabelsForMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/milestones/:milestone_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/milestones/:milestone_number/labels"]["response"];
    };
    listLabelsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/labels"]["response"];
    };
    listLabelsOnIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/:issue_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/:issue_number/labels"]["response"];
    };
    listMilestonesForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/milestones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/milestones"]["response"];
    };
    lock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/issues/:issue_number/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/issues/:issue_number/lock"]["response"];
    };
    removeAllLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/labels"]["response"];
    };
    removeAssignees: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/assignees"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/assignees"]["response"];
    };
    removeLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name"]["response"];
    };
    removeLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/labels"]["response"];
    };
    replaceAllLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/issues/:issue_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/issues/:issue_number/labels"]["response"];
    };
    replaceLabels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/issues/:issue_number/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/issues/:issue_number/labels"]["response"];
    };
    unlock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/lock"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/issues/:issue_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/issues/:issue_number"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/issues/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/issues/comments/:comment_id"]["response"];
    };
    updateLabel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/labels/:name"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/labels/:name"]["response"];
    };
    updateMilestone: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/milestones/:milestone_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/milestones/:milestone_number"]["response"];
    };
  };
  licenses: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /licenses/:license"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /licenses/:license"]["response"];
    };
    getForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/license"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/license"]["response"];
    };
    listCommonlyUsed: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /licenses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /licenses"]["response"];
    };
  };
  markdown: {
    render: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /markdown"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /markdown"]["response"];
    };
    renderRaw: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /markdown/raw"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /markdown/raw"]["response"];
    };
  };
  meta: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /meta"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /meta"]["response"];
    };
  };
  migrations: {
    cancelImport: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/import"]["response"];
    };
    deleteArchiveForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/migrations/:migration_id/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/migrations/:migration_id/archive"]["response"];
    };
    deleteArchiveForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/migrations/:migration_id/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/migrations/:migration_id/archive"]["response"];
    };
    downloadArchiveForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/migrations/:migration_id/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/migrations/:migration_id/archive"]["response"];
    };
    getArchiveForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations/:migration_id/archive"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations/:migration_id/archive"]["response"];
    };
    getCommitAuthors: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/import/authors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/import/authors"]["response"];
    };
    getImportProgress: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/import"]["response"];
    };
    getLargeFiles: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/import/large_files"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/import/large_files"]["response"];
    };
    getStatusForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations/:migration_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations/:migration_id"]["response"];
    };
    getStatusForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/migrations/:migration_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/migrations/:migration_id"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/migrations"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/migrations"]["response"];
    };
    listReposForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/migrations/:migration_id/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/migrations/:migration_id/repositories"]["response"];
    };
    listReposForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/:migration_id/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/:migration_id/repositories"]["response"];
    };
    mapCommitAuthor: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/import/authors/:author_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/import/authors/:author_id"]["response"];
    };
    setLfsPreference: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/import/lfs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/import/lfs"]["response"];
    };
    startForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/migrations"]["response"];
    };
    startForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/migrations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/migrations"]["response"];
    };
    startImport: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/import"]["response"];
    };
    unlockRepoForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/migrations/:migration_id/repos/:repo_name/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/migrations/:migration_id/repos/:repo_name/lock"]["response"];
    };
    unlockRepoForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/migrations/:migration_id/repos/:repo_name/lock"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/migrations/:migration_id/repos/:repo_name/lock"]["response"];
    };
    updateImport: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/import"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/import"]["response"];
    };
  };
  orgs: {
    addOrUpdateMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/memberships/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/memberships/:username"]["response"];
    };
    blockUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/blocks/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/blocks/:username"]["response"];
    };
    checkBlockedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/blocks/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/blocks/:username"]["response"];
    };
    checkMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/members/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/members/:username"]["response"];
    };
    checkPublicMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/public_members/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/public_members/:username"]["response"];
    };
    concealMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/public_members/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/public_members/:username"]["response"];
    };
    convertMemberToOutsideCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/outside_collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/outside_collaborators/:username"]["response"];
    };
    createHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/hooks"]["response"];
    };
    createInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/invitations"]["response"];
    };
    deleteHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/hooks/:hook_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/hooks/:hook_id"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org"]["response"];
    };
    getHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/hooks/:hook_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/hooks/:hook_id"]["response"];
    };
    getMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/memberships/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/memberships/:username"]["response"];
    };
    getMembershipForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/memberships/orgs/:org"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/memberships/orgs/:org"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /organizations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /organizations"]["response"];
    };
    listBlockedUsers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/blocks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/blocks"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/orgs"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/orgs"]["response"];
    };
    listHooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/hooks"]["response"];
    };
    listInstallations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/installations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/installations"]["response"];
    };
    listInvitationTeams: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/invitations/:invitation_id/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/invitations/:invitation_id/teams"]["response"];
    };
    listMembers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/members"]["response"];
    };
    listMemberships: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/memberships/orgs"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/memberships/orgs"]["response"];
    };
    listOutsideCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/outside_collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/outside_collaborators"]["response"];
    };
    listPendingInvitations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/invitations"]["response"];
    };
    listPublicMembers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/public_members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/public_members"]["response"];
    };
    pingHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/hooks/:hook_id/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/hooks/:hook_id/pings"]["response"];
    };
    publicizeMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/public_members/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/public_members/:username"]["response"];
    };
    removeMember: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/members/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/members/:username"]["response"];
    };
    removeMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/memberships/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/memberships/:username"]["response"];
    };
    removeOutsideCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/outside_collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/outside_collaborators/:username"]["response"];
    };
    unblockUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/blocks/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/blocks/:username"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/:org"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/:org"]["response"];
    };
    updateHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/:org/hooks/:hook_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/:org/hooks/:hook_id"]["response"];
    };
    updateMembership: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/memberships/orgs/:org"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/memberships/orgs/:org"]["response"];
    };
  };
  projects: {
    addCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /projects/:project_id/collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /projects/:project_id/collaborators/:username"]["response"];
    };
    createCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/:column_id/cards"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/:column_id/cards"]["response"];
    };
    createColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/:project_id/columns"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/:project_id/columns"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/projects"]["response"];
    };
    createForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/projects"]["response"];
    };
    createForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/projects"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/:project_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/:project_id"]["response"];
    };
    deleteCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/columns/cards/:card_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/columns/cards/:card_id"]["response"];
    };
    deleteColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/columns/:column_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/columns/:column_id"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/:project_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/:project_id"]["response"];
    };
    getCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/cards/:card_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/cards/:card_id"]["response"];
    };
    getColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/:column_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/:column_id"]["response"];
    };
    listCards: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/columns/:column_id/cards"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/columns/:column_id/cards"]["response"];
    };
    listCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/:project_id/collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/:project_id/collaborators"]["response"];
    };
    listColumns: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/:project_id/columns"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/:project_id/columns"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/projects"]["response"];
    };
    listForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/projects"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/projects"]["response"];
    };
    moveCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/cards/:card_id/moves"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/cards/:card_id/moves"]["response"];
    };
    moveColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /projects/columns/:column_id/moves"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /projects/columns/:column_id/moves"]["response"];
    };
    removeCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /projects/:project_id/collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /projects/:project_id/collaborators/:username"]["response"];
    };
    reviewUserPermissionLevel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /projects/:project_id/collaborators/:username/permission"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /projects/:project_id/collaborators/:username/permission"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/:project_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/:project_id"]["response"];
    };
    updateCard: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/columns/cards/:card_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/columns/cards/:card_id"]["response"];
    };
    updateColumn: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /projects/columns/:column_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /projects/columns/:column_id"]["response"];
    };
  };
  pulls: {
    checkIfMerged: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/merge"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/merge"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls"]["response"];
    };
    createComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/comments"]["response"];
    };
    createReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/reviews"]["response"];
    };
    createReviewCommentReply: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/comments/:comment_id/replies"]["response"];
    };
    createReviewRequest: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers"]["response"];
    };
    deleteComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/pulls/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/pulls/comments/:comment_id"]["response"];
    };
    deletePendingReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"]["response"];
    };
    deleteReviewRequest: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers"]["response"];
    };
    dismissReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number"]["response"];
    };
    getComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/comments/:comment_id"]["response"];
    };
    getCommentsForReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments"]["response"];
    };
    getReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls"]["response"];
    };
    listComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/comments"]["response"];
    };
    listCommentsForRepo: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/commits"]["response"];
    };
    listFiles: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/files"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/files"]["response"];
    };
    listReviewRequests: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers"]["response"];
    };
    listReviews: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/:pull_number/reviews"]["response"];
    };
    merge: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/merge"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/merge"]["response"];
    };
    submitReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/pulls/:pull_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/pulls/:pull_number"]["response"];
    };
    updateBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/update-branch"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/update-branch"]["response"];
    };
    updateComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/pulls/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/pulls/comments/:comment_id"]["response"];
    };
    updateReview: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id"]["response"];
    };
  };
  rateLimit: {
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /rate_limit"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /rate_limit"]["response"];
    };
  };
  reactions: {
    createForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/comments/:comment_id/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/comments/:comment_id/reactions"]["response"];
    };
    createForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/issues/:issue_number/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/issues/:issue_number/reactions"]["response"];
    };
    createForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/issues/comments/:comment_id/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/issues/comments/:comment_id/reactions"]["response"];
    };
    createForPullRequestReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pulls/comments/:comment_id/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pulls/comments/:comment_id/reactions"]["response"];
    };
    createForTeamDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"]["response"];
    };
    createForTeamDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /reactions/:reaction_id"]["response"];
    };
    deleteForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id"]["response"];
    };
    deleteForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id"]["response"];
    };
    deleteForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id"]["response"];
    };
    deleteForPullRequestComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id"]["response"];
    };
    deleteForTeamDiscussion: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id"]["response"];
    };
    deleteForTeamDiscussionComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id"]["response"];
    };
    deleteLegacy: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /reactions/:reaction_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /reactions/:reaction_id"]["response"];
    };
    listForCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/comments/:comment_id/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/comments/:comment_id/reactions"]["response"];
    };
    listForIssue: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/:issue_number/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/:issue_number/reactions"]["response"];
    };
    listForIssueComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/issues/comments/:comment_id/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/issues/comments/:comment_id/reactions"]["response"];
    };
    listForPullRequestReviewComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pulls/comments/:comment_id/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pulls/comments/:comment_id/reactions"]["response"];
    };
    listForTeamDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions"]["response"];
    };
    listForTeamDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions"]["response"];
    };
  };
  repos: {
    acceptInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/repository_invitations/:invitation_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/repository_invitations/:invitation_id"]["response"];
    };
    addCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/collaborators/:username"]["response"];
    };
    addDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/keys"]["response"];
    };
    addProtectedBranchAdminEnforcement: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins"]["response"];
    };
    addProtectedBranchAppRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["response"];
    };
    addProtectedBranchRequiredSignatures: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/required_signatures"]["response"];
    };
    addProtectedBranchRequiredStatusChecksContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["response"];
    };
    addProtectedBranchTeamRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["response"];
    };
    addProtectedBranchUserRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["response"];
    };
    checkCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/collaborators/:username"]["response"];
    };
    checkVulnerabilityAlerts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/vulnerability-alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/vulnerability-alerts"]["response"];
    };
    compareCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/compare/:base...:head"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/compare/:base...:head"]["response"];
    };
    createCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/commits/:commit_sha/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/commits/:commit_sha/comments"]["response"];
    };
    createDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/deployments"]["response"];
    };
    createDeploymentStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/deployments/:deployment_id/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/deployments/:deployment_id/statuses"]["response"];
    };
    createDispatchEvent: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/dispatches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/dispatches"]["response"];
    };
    createForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/repos"]["response"];
    };
    createFork: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/forks"]["response"];
    };
    createHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/hooks"]["response"];
    };
    createInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/repos"]["response"];
    };
    createOrUpdateFile: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/contents/:path"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/contents/:path"]["response"];
    };
    createRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/releases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/releases"]["response"];
    };
    createStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/statuses/:sha"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/statuses/:sha"]["response"];
    };
    createUsingTemplate: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:template_owner/:template_repo/generate"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:template_owner/:template_repo/generate"]["response"];
    };
    declineInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/repository_invitations/:invitation_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/repository_invitations/:invitation_id"]["response"];
    };
    delete: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo"]["response"];
    };
    deleteCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/comments/:comment_id"]["response"];
    };
    deleteDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/deployments/:deployment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/deployments/:deployment_id"]["response"];
    };
    deleteDownload: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/downloads/:download_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/downloads/:download_id"]["response"];
    };
    deleteFile: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/contents/:path"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/contents/:path"]["response"];
    };
    deleteHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/hooks/:hook_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/hooks/:hook_id"]["response"];
    };
    deleteInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/invitations/:invitation_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/invitations/:invitation_id"]["response"];
    };
    deleteRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/releases/:release_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/releases/:release_id"]["response"];
    };
    deleteReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/releases/assets/:asset_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/releases/assets/:asset_id"]["response"];
    };
    disableAutomatedSecurityFixes: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/automated-security-fixes"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/automated-security-fixes"]["response"];
    };
    disablePagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/pages"]["response"];
    };
    disableVulnerabilityAlerts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/vulnerability-alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/vulnerability-alerts"]["response"];
    };
    enableAutomatedSecurityFixes: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/automated-security-fixes"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/automated-security-fixes"]["response"];
    };
    enablePagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pages"]["response"];
    };
    enableVulnerabilityAlerts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/vulnerability-alerts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/vulnerability-alerts"]["response"];
    };
    get: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo"]["response"];
    };
    getAllTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/topics"]["response"];
    };
    getAppsWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["response"];
    };
    getArchiveLink: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/:archive_format/:ref"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/:archive_format/:ref"]["response"];
    };
    getBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch"]["response"];
    };
    getBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection"]["response"];
    };
    getClones: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/traffic/clones"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/traffic/clones"]["response"];
    };
    getCodeFrequencyStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/stats/code_frequency"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/stats/code_frequency"]["response"];
    };
    getCollaboratorPermissionLevel: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/collaborators/:username/permission"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/collaborators/:username/permission"]["response"];
    };
    getCombinedStatusForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:ref/status"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:ref/status"]["response"];
    };
    getCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:ref"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:ref"]["response"];
    };
    getCommitActivityStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/stats/commit_activity"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/stats/commit_activity"]["response"];
    };
    getCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/comments/:comment_id"]["response"];
    };
    getContents: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/contents/:path"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/contents/:path"]["response"];
    };
    getContributorsStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/stats/contributors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/stats/contributors"]["response"];
    };
    getDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/keys/:key_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/keys/:key_id"]["response"];
    };
    getDeployment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/deployments/:deployment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/deployments/:deployment_id"]["response"];
    };
    getDeploymentStatus: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id"]["response"];
    };
    getDownload: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/downloads/:download_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/downloads/:download_id"]["response"];
    };
    getHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/hooks/:hook_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/hooks/:hook_id"]["response"];
    };
    getLatestPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pages/builds/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pages/builds/latest"]["response"];
    };
    getLatestRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/releases/latest"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/releases/latest"]["response"];
    };
    getPages: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pages"]["response"];
    };
    getPagesBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pages/builds/:build_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pages/builds/:build_id"]["response"];
    };
    getParticipationStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/stats/participation"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/stats/participation"]["response"];
    };
    getProtectedBranchAdminEnforcement: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins"]["response"];
    };
    getProtectedBranchPullRequestReviewEnforcement: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"]["response"];
    };
    getProtectedBranchRequiredSignatures: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_signatures"]["response"];
    };
    getProtectedBranchRequiredStatusChecks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks"]["response"];
    };
    getProtectedBranchRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions"]["response"];
    };
    getPunchCardStats: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/stats/punch_card"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/stats/punch_card"]["response"];
    };
    getReadme: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/readme"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/readme"]["response"];
    };
    getRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/releases/:release_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/releases/:release_id"]["response"];
    };
    getReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/releases/assets/:asset_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/releases/assets/:asset_id"]["response"];
    };
    getReleaseByTag: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/releases/tags/:tag"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/releases/tags/:tag"]["response"];
    };
    getTeamsWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["response"];
    };
    getTopPaths: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/traffic/popular/paths"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/traffic/popular/paths"]["response"];
    };
    getTopReferrers: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/traffic/popular/referrers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/traffic/popular/referrers"]["response"];
    };
    getUsersWithAccessToProtectedBranch: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["response"];
    };
    getViews: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/traffic/views"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/traffic/views"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repos"]["response"];
    };
    listAssetsForRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/releases/:release_id/assets"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/releases/:release_id/assets"]["response"];
    };
    listBranches: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches"]["response"];
    };
    listBranchesForHeadCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:commit_sha/branches-where-head"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:commit_sha/branches-where-head"]["response"];
    };
    listCollaborators: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/collaborators"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/collaborators"]["response"];
    };
    listCommentsForCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:commit_sha/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:commit_sha/comments"]["response"];
    };
    listCommitComments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/comments"]["response"];
    };
    listCommits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits"]["response"];
    };
    listContributors: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/contributors"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/contributors"]["response"];
    };
    listDeployKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/keys"]["response"];
    };
    listDeploymentStatuses: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/deployments/:deployment_id/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/deployments/:deployment_id/statuses"]["response"];
    };
    listDeployments: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/deployments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/deployments"]["response"];
    };
    listDownloads: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/downloads"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/downloads"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repos"]["response"];
    };
    listForOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/repos"]["response"];
    };
    listForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/repos"]["response"];
    };
    listForks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/forks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/forks"]["response"];
    };
    listHooks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/hooks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/hooks"]["response"];
    };
    listInvitations: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/invitations"]["response"];
    };
    listInvitationsForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/repository_invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/repository_invitations"]["response"];
    };
    listLanguages: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/languages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/languages"]["response"];
    };
    listPagesBuilds: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/pages/builds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/pages/builds"]["response"];
    };
    listProtectedBranchRequiredStatusChecksContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["response"];
    };
    listPublic: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repositories"]["response"];
    };
    listPullRequestsAssociatedWithCommit: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:commit_sha/pulls"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:commit_sha/pulls"]["response"];
    };
    listReleases: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/releases"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/releases"]["response"];
    };
    listStatusesForRef: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/commits/:ref/statuses"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/commits/:ref/statuses"]["response"];
    };
    listTags: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/tags"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/tags"]["response"];
    };
    listTeams: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/teams"]["response"];
    };
    listTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/topics"]["response"];
    };
    merge: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/merges"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/merges"]["response"];
    };
    pingHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/hooks/:hook_id/pings"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/hooks/:hook_id/pings"]["response"];
    };
    removeBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection"]["response"];
    };
    removeCollaborator: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/collaborators/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/collaborators/:username"]["response"];
    };
    removeDeployKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/keys/:key_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/keys/:key_id"]["response"];
    };
    removeProtectedBranchAdminEnforcement: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins"]["response"];
    };
    removeProtectedBranchAppRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["response"];
    };
    removeProtectedBranchPullRequestReviewEnforcement: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"]["response"];
    };
    removeProtectedBranchRequiredSignatures: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures"]["response"];
    };
    removeProtectedBranchRequiredStatusChecks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks"]["response"];
    };
    removeProtectedBranchRequiredStatusChecksContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["response"];
    };
    removeProtectedBranchRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions"]["response"];
    };
    removeProtectedBranchTeamRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["response"];
    };
    removeProtectedBranchUserRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["response"];
    };
    replaceAllTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/topics"]["response"];
    };
    replaceProtectedBranchAppRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/apps"]["response"];
    };
    replaceProtectedBranchRequiredStatusChecksContexts: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts"]["response"];
    };
    replaceProtectedBranchTeamRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams"]["response"];
    };
    replaceProtectedBranchUserRestrictions: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users"]["response"];
    };
    replaceTopics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/topics"]["response"];
    };
    requestPageBuild: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/pages/builds"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/pages/builds"]["response"];
    };
    retrieveCommunityProfileMetrics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /repos/:owner/:repo/community/profile"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /repos/:owner/:repo/community/profile"]["response"];
    };
    testPushHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/hooks/:hook_id/tests"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/hooks/:hook_id/tests"]["response"];
    };
    transfer: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/transfer"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/transfer"]["response"];
    };
    update: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo"]["response"];
    };
    updateBranchProtection: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/branches/:branch/protection"]["response"];
    };
    updateCommitComment: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/comments/:comment_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/comments/:comment_id"]["response"];
    };
    updateHook: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/hooks/:hook_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/hooks/:hook_id"]["response"];
    };
    updateInformationAboutPagesSite: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /repos/:owner/:repo/pages"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /repos/:owner/:repo/pages"]["response"];
    };
    updateInvitation: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/invitations/:invitation_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/invitations/:invitation_id"]["response"];
    };
    updateProtectedBranchPullRequestReviewEnforcement: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews"]["response"];
    };
    updateProtectedBranchRequiredStatusChecks: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks"]["response"];
    };
    updateRelease: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/releases/:release_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/releases/:release_id"]["response"];
    };
    updateReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /repos/:owner/:repo/releases/assets/:asset_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /repos/:owner/:repo/releases/assets/:asset_id"]["response"];
    };
    uploadReleaseAsset: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /repos/:owner/:repo/releases/:release_id/assets{?name,label}"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /repos/:owner/:repo/releases/:release_id/assets{?name,label}"]["response"];
    };
  };
  search: {
    code: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/code"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/code"]["response"];
    };
    commits: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/commits"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/commits"]["response"];
    };
    issuesAndPullRequests: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/issues"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/issues"]["response"];
    };
    labels: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/labels"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/labels"]["response"];
    };
    repos: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/repositories"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/repositories"]["response"];
    };
    topics: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/topics"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/topics"]["response"];
    };
    users: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /search/users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /search/users"]["response"];
    };
  };
  teams: {
    addOrUpdateMembershipInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/teams/:team_slug/memberships/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/teams/:team_slug/memberships/:username"]["response"];
    };
    addOrUpdateProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/teams/:team_slug/projects/:project_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/teams/:team_slug/projects/:project_id"]["response"];
    };
    addOrUpdateRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /orgs/:org/teams/:team_slug/repos/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /orgs/:org/teams/:team_slug/repos/:owner/:repo"]["response"];
    };
    checkManagesRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/repos/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/repos/:owner/:repo"]["response"];
    };
    create: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/teams"]["response"];
    };
    createDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"]["response"];
    };
    createDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /orgs/:org/teams/:team_slug/discussions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /orgs/:org/teams/:team_slug/discussions"]["response"];
    };
    deleteDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"]["response"];
    };
    deleteDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number"]["response"];
    };
    deleteInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug"]["response"];
    };
    getByName: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug"]["response"];
    };
    getDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"]["response"];
    };
    getDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number"]["response"];
    };
    getMembershipInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/memberships/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/memberships/:username"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams"]["response"];
    };
    listChildInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/teams"]["response"];
    };
    listDiscussionCommentsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments"]["response"];
    };
    listDiscussionsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/discussions"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/discussions"]["response"];
    };
    listForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/teams"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/teams"]["response"];
    };
    listMembersInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/members"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/members"]["response"];
    };
    listPendingInvitationsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/invitations"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/invitations"]["response"];
    };
    listProjectsInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/projects"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/projects"]["response"];
    };
    listReposInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/repos"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/repos"]["response"];
    };
    removeMembershipInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/memberships/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/memberships/:username"]["response"];
    };
    removeProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/projects/:project_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/projects/:project_id"]["response"];
    };
    removeRepoInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /orgs/:org/teams/:team_slug/repos/:owner/:repo"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /orgs/:org/teams/:team_slug/repos/:owner/:repo"]["response"];
    };
    reviewProjectInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /orgs/:org/teams/:team_slug/projects/:project_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /orgs/:org/teams/:team_slug/projects/:project_id"]["response"];
    };
    updateDiscussionCommentInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number"]["response"];
    };
    updateDiscussionInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/:org/teams/:team_slug/discussions/:discussion_number"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/:org/teams/:team_slug/discussions/:discussion_number"]["response"];
    };
    updateInOrg: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /orgs/:org/teams/:team_slug"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /orgs/:org/teams/:team_slug"]["response"];
    };
  };
  users: {
    addEmails: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/emails"]["response"];
    };
    block: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/blocks/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/blocks/:username"]["response"];
    };
    checkBlocked: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/blocks/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/blocks/:username"]["response"];
    };
    checkFollowing: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following/:username"]["response"];
    };
    checkFollowingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/following/:target_user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/following/:target_user"]["response"];
    };
    createGpgKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/gpg_keys"]["response"];
    };
    createPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["POST /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["POST /user/keys"]["response"];
    };
    deleteEmails: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/emails"]["response"];
    };
    deleteGpgKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/gpg_keys/:gpg_key_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/gpg_keys/:gpg_key_id"]["response"];
    };
    deletePublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/keys/:key_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/keys/:key_id"]["response"];
    };
    follow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PUT /user/following/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PUT /user/following/:username"]["response"];
    };
    getAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user"]["response"];
    };
    getByUsername: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username"]["response"];
    };
    getContextForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/hovercard"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/hovercard"]["response"];
    };
    getGpgKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys/:gpg_key_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys/:gpg_key_id"]["response"];
    };
    getPublicKey: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys/:key_id"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys/:key_id"]["response"];
    };
    list: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users"]["response"];
    };
    listBlocked: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/blocks"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/blocks"]["response"];
    };
    listEmails: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/emails"]["response"];
    };
    listFollowedByAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following"]["response"];
    };
    listFollowersForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/followers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/followers"]["response"];
    };
    listFollowersForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/followers"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/followers"]["response"];
    };
    listFollowingForAuthenticatedUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/following"]["response"];
    };
    listFollowingForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/following"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/following"]["response"];
    };
    listGpgKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/gpg_keys"]["response"];
    };
    listGpgKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/gpg_keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/gpg_keys"]["response"];
    };
    listPublicEmails: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/public_emails"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/public_emails"]["response"];
    };
    listPublicKeys: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /user/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /user/keys"]["response"];
    };
    listPublicKeysForUser: {
      parameters: RequestParameters &
        Omit<
          Endpoints["GET /users/:username/keys"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["GET /users/:username/keys"]["response"];
    };
    togglePrimaryEmailVisibility: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user/email/visibility"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user/email/visibility"]["response"];
    };
    unblock: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/blocks/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/blocks/:username"]["response"];
    };
    unfollow: {
      parameters: RequestParameters &
        Omit<
          Endpoints["DELETE /user/following/:username"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["DELETE /user/following/:username"]["response"];
    };
    updateAuthenticated: {
      parameters: RequestParameters &
        Omit<
          Endpoints["PATCH /user"]["parameters"],
          "baseUrl" | "headers" | "mediaType"
        >;
      response: Endpoints["PATCH /user"]["response"];
    };
  };
};

export type RestEndpointMethods = {
  actions: {
    /**
     * Cancels a workflow run using its `id`. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    cancelWorkflowRun: {
      (
        params?: RestEndpointMethodTypes["actions"]["cancelWorkflowRun"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["cancelWorkflowRun"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Creates or updates a secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.
     *
     * Encrypt your secret using the [tweetsodium](https://github.com/mastahyeti/tweetsodium) library.
     *
     *
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
     *
     *
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     *
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     */
    createOrUpdateSecretForRepo: {
      (
        params?: RestEndpointMethodTypes["actions"]["createOrUpdateSecretForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["createOrUpdateSecretForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns a token that you can pass to the `config` script. The token expires after one hour. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.
     *
     * Configure your self-hosted runner, replacing TOKEN with the registration token provided by this endpoint.
     */
    createRegistrationToken: {
      (
        params?: RestEndpointMethodTypes["actions"]["createRegistrationToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["createRegistrationToken"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.
     *
     * Remove your self-hosted runner from a repository, replacing TOKEN with the remove token provided by this endpoint.
     */
    createRemoveToken: {
      (
        params?: RestEndpointMethodTypes["actions"]["createRemoveToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["createRemoveToken"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes an artifact for a workflow run. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    deleteArtifact: {
      (
        params?: RestEndpointMethodTypes["actions"]["deleteArtifact"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["deleteArtifact"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a secret in a repository using the secret name. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.
     */
    deleteSecretFromRepo: {
      (
        params?: RestEndpointMethodTypes["actions"]["deleteSecretFromRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["deleteSecretFromRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     *
     * Call this endpoint using the `-v` flag, which enables verbose output and allows you to see the download URL in the header. To download the file into the current working directory, specify the filename using the `-o` flag.
     */
    downloadArtifact: {
      (
        params?: RestEndpointMethodTypes["actions"]["downloadArtifact"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["downloadArtifact"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    getArtifact: {
      (
        params?: RestEndpointMethodTypes["actions"]["getArtifact"]["parameters"]
      ): Promise<RestEndpointMethodTypes["actions"]["getArtifact"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Gets your public key, which you must store. You need your public key to use other secrets endpoints. Use the returned `key` to encrypt your secrets. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.
     */
    getPublicKey: {
      (
        params?: RestEndpointMethodTypes["actions"]["getPublicKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["getPublicKey"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a single secret without revealing its encrypted value. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.
     */
    getSecret: {
      (
        params?: RestEndpointMethodTypes["actions"]["getSecret"]["parameters"]
      ): Promise<RestEndpointMethodTypes["actions"]["getSecret"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a specific self-hosted runner. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.
     */
    getSelfHostedRunner: {
      (
        params?: RestEndpointMethodTypes["actions"]["getSelfHostedRunner"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["getSelfHostedRunner"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a specific workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    getWorkflow: {
      (
        params?: RestEndpointMethodTypes["actions"]["getWorkflow"]["parameters"]
      ): Promise<RestEndpointMethodTypes["actions"]["getWorkflow"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    getWorkflowJob: {
      (
        params?: RestEndpointMethodTypes["actions"]["getWorkflowJob"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["getWorkflowJob"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    getWorkflowRun: {
      (
        params?: RestEndpointMethodTypes["actions"]["getWorkflowRun"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["getWorkflowRun"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    listArtifactsForRepo: {
      (
        params?: RestEndpointMethodTypes["actions"]["listArtifactsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listArtifactsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists binaries for the self-hosted runner application that you can download and run. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.
     */
    listDownloadsForSelfHostedRunnerApplication: {
      (
        params?: RestEndpointMethodTypes["actions"]["listDownloadsForSelfHostedRunnerApplication"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listDownloadsForSelfHostedRunnerApplication"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).
     */
    listJobsForWorkflowRun: {
      (
        params?: RestEndpointMethodTypes["actions"]["listJobsForWorkflowRun"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listJobsForWorkflowRun"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    listRepoWorkflowRuns: {
      (
        params?: RestEndpointMethodTypes["actions"]["listRepoWorkflowRuns"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listRepoWorkflowRuns"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    listRepoWorkflows: {
      (
        params?: RestEndpointMethodTypes["actions"]["listRepoWorkflows"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listRepoWorkflows"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all secrets available in a repository without revealing their encrypted values. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.
     */
    listSecretsForRepo: {
      (
        params?: RestEndpointMethodTypes["actions"]["listSecretsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listSecretsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all self-hosted runners for a repository. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.
     */
    listSelfHostedRunnersForRepo: {
      (
        params?: RestEndpointMethodTypes["actions"]["listSelfHostedRunnersForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listSelfHostedRunnersForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     *
     * Call this endpoint using the `-v` flag, which enables verbose output and allows you to see the download URL in the header. To download the file into the current working directory, specify the filename using the `-o` flag.
     */
    listWorkflowJobLogs: {
      (
        params?: RestEndpointMethodTypes["actions"]["listWorkflowJobLogs"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listWorkflowJobLogs"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    listWorkflowRunArtifacts: {
      (
        params?: RestEndpointMethodTypes["actions"]["listWorkflowRunArtifacts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listWorkflowRunArtifacts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     *
     * Call this endpoint using the `-v` flag, which enables verbose output and allows you to see the download URL in the header. To download the file into the current working directory, specify the filename using the `-o` flag.
     */
    listWorkflowRunLogs: {
      (
        params?: RestEndpointMethodTypes["actions"]["listWorkflowRunLogs"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listWorkflowRunLogs"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all workflow runs for a workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).
     *
     * Anyone with read access to the repository can use this endpoint.
     */
    listWorkflowRuns: {
      (
        params?: RestEndpointMethodTypes["actions"]["listWorkflowRuns"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["listWorkflowRuns"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Re-runs your workflow run using its `id`. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.
     */
    reRunWorkflow: {
      (
        params?: RestEndpointMethodTypes["actions"]["reRunWorkflow"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["reRunWorkflow"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.
     */
    removeSelfHostedRunner: {
      (
        params?: RestEndpointMethodTypes["actions"]["removeSelfHostedRunner"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["actions"]["removeSelfHostedRunner"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  activity: {
    checkRepoIsStarredByAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["checkRepoIsStarredByAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["checkRepoIsStarredByAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.activity.checkStarringRepo() has been renamed to octokit.activity.checkRepoIsStarredByAuthenticatedUser() (2020-03-25)
     */
    checkStarringRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["checkStarringRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["checkStarringRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://developer.github.com/v3/activity/watching/#set-a-repository-subscription).
     */
    deleteRepoSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["deleteRepoSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["deleteRepoSubscription"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription) endpoint and set `ignore` to `true`.
     */
    deleteThreadSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["deleteThreadSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["deleteThreadSubscription"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
     *
     * *   **Timeline**: The GitHub global public timeline
     * *   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia)
     * *   **Current user public**: The public timeline for the authenticated user
     * *   **Current user**: The private timeline for the authenticated user
     * *   **Current user actor**: The private timeline for activity created by the authenticated user
     * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
     * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
     *
     * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
     */
    getFeeds: {
      (
        params?: RestEndpointMethodTypes["activity"]["getFeeds"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["getFeeds"]["response"]>;

      endpoint: EndpointInterface;
    };

    getRepoSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["getRepoSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["getRepoSubscription"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getThread: {
      (
        params?: RestEndpointMethodTypes["activity"]["getThread"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["getThread"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     * @deprecated octokit.activity.getThreadSubscription() has been renamed to octokit.activity.getThreadSubscriptionForAuthenticatedUser() (2020-03-25)
     */
    getThreadSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["getThreadSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["getThreadSubscription"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://developer.github.com/v3/activity/watching/#get-a-repository-subscription).
     *
     * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
     */
    getThreadSubscriptionForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["getThreadSubscriptionForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["getThreadSubscriptionForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     */
    listEventsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listEventsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listEventsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     * @deprecated octokit.activity.listEventsForOrg() has been renamed to octokit.activity.listOrgEventsForAuthenticatedUser() (2020-03-25)
     */
    listEventsForOrg: {
      (
        params?: RestEndpointMethodTypes["activity"]["listEventsForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listEventsForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     * @deprecated octokit.activity.listEventsForUser() has been renamed to octokit.activity.listEventsForAuthenticatedUser() (2020-03-25)
     */
    listEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listEventsForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
     *
     * *   **Timeline**: The GitHub global public timeline
     * *   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia)
     * *   **Current user public**: The public timeline for the authenticated user
     * *   **Current user**: The private timeline for the authenticated user
     * *   **Current user actor**: The private timeline for activity created by the authenticated user
     * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
     * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
     *
     * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
     * @deprecated octokit.activity.listFeeds() has been renamed to octokit.activity.getFeeds() (2020-03-25)
     */
    listFeeds: {
      (
        params?: RestEndpointMethodTypes["activity"]["listFeeds"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["listFeeds"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * List all notifications for the current user, sorted by most recently updated.
     *
     * The following example uses the `since` parameter to list notifications that have been updated after the specified time.
     * @deprecated octokit.activity.listNotifications() has been renamed to octokit.activity.listNotificationsForAuthenticatedUser() (2020-03-25)
     */
    listNotifications: {
      (
        params?: RestEndpointMethodTypes["activity"]["listNotifications"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listNotifications"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all notifications for the current user, sorted by most recently updated.
     *
     * The following example uses the `since` parameter to list notifications that have been updated after the specified time.
     */
    listNotificationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listNotificationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listNotificationsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all notifications for the current user.
     * @deprecated octokit.activity.listNotificationsForRepo() has been renamed to octokit.activity.listRepoNotificationsForAuthenticatedUser() (2020-03-25)
     */
    listNotificationsForRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["listNotificationsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listNotificationsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     */
    listOrgEventsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listOrgEventsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listOrgEventsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
     */
    listPublicEvents: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEvents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEvents"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.activity.listPublicEventsForOrg() has been renamed to octokit.activity.listPublicOrgEvents() (2020-03-25)
     */
    listPublicEventsForOrg: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEventsForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEventsForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listPublicEventsForRepoNetwork: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEventsForRepoNetwork"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEventsForRepoNetwork"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listPublicEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicEventsForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listPublicOrgEvents: {
      (
        params?: RestEndpointMethodTypes["activity"]["listPublicOrgEvents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listPublicOrgEvents"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
     */
    listReceivedEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReceivedEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReceivedEventsForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listReceivedPublicEventsForUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReceivedPublicEventsForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReceivedPublicEventsForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listRepoEvents: {
      (
        params?: RestEndpointMethodTypes["activity"]["listRepoEvents"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listRepoEvents"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all notifications for the current user.
     */
    listRepoNotificationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listRepoNotificationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listRepoNotificationsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories the authenticated user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     */
    listReposStarredByAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReposStarredByAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReposStarredByAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories a user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     */
    listReposStarredByUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReposStarredByUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReposStarredByUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories a user is watching.
     */
    listReposWatchedByUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listReposWatchedByUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listReposWatchedByUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people that have starred the repository.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     */
    listStargazersForRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["listStargazersForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listStargazersForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories the authenticated user is watching.
     */
    listWatchedReposForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["listWatchedReposForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listWatchedReposForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people watching the specified repository.
     */
    listWatchersForRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["listWatchersForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["listWatchersForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     * @deprecated octokit.activity.markAsRead() has been renamed to octokit.activity.markNotificationsAsRead() (2020-03-25)
     */
    markAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markAsRead"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["markAsRead"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     */
    markNotificationsAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markNotificationsAsRead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markNotificationsAsRead"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Marks all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     * @deprecated octokit.activity.markNotificationsAsReadForRepo() has been renamed to octokit.activity.markRepoNotificationsAsRead() (2020-03-25)
     */
    markNotificationsAsReadForRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["markNotificationsAsReadForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markNotificationsAsReadForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Marks all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     */
    markRepoNotificationsAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markRepoNotificationsAsRead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markRepoNotificationsAsRead"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    markThreadAsRead: {
      (
        params?: RestEndpointMethodTypes["activity"]["markThreadAsRead"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["markThreadAsRead"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription) completely.
     */
    setRepoSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["setRepoSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["setRepoSubscription"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
     *
     * You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
     *
     * Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription) endpoint.
     */
    setThreadSubscription: {
      (
        params?: RestEndpointMethodTypes["activity"]["setThreadSubscription"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["setThreadSubscription"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     * @deprecated octokit.activity.starRepo() has been renamed to octokit.activity.starRepoForAuthenticatedUser() (2020-03-25)
     */
    starRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["starRepo"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["starRepo"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     */
    starRepoForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["starRepoForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["starRepoForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.activity.unstarRepo() has been renamed to octokit.activity.unstarRepoForAuthenticatedUser() (2020-03-25)
     */
    unstarRepo: {
      (
        params?: RestEndpointMethodTypes["activity"]["unstarRepo"]["parameters"]
      ): Promise<RestEndpointMethodTypes["activity"]["unstarRepo"]["response"]>;

      endpoint: EndpointInterface;
    };

    unstarRepoForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["activity"]["unstarRepoForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["activity"]["unstarRepoForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  apps: {
    /**
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.
     */
    addRepoToInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["addRepoToInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["addRepoToInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @deprecated octokit.apps.checkAccountIsAssociatedWithAny() has been renamed to octokit.apps.getSubscriptionPlanForAccount() (2020-03-08)
     */
    checkAccountIsAssociatedWithAny: {
      (
        params?: RestEndpointMethodTypes["apps"]["checkAccountIsAssociatedWithAny"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["checkAccountIsAssociatedWithAny"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @deprecated octokit.apps.checkAccountIsAssociatedWithAnyStubbed() has been renamed to octokit.apps.getSubscriptionPlanForAccountStubbed() (2020-03-08)
     */
    checkAccountIsAssociatedWithAnyStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["checkAccountIsAssociatedWithAnyStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["checkAccountIsAssociatedWithAnyStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     */
    checkToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["checkToken"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["checkToken"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://developer.github.com/v3/activity/events/types/#contentreferenceevent) to create an attachment.
     *
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://developer.github.com/apps/using-content-attachments/)" for details about content attachments.
     *
     * You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * This example creates a content attachment for the domain `https://errors.ai/`.
     */
    createContentAttachment: {
      (
        params?: RestEndpointMethodTypes["apps"]["createContentAttachment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createContentAttachment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     */
    createFromManifest: {
      (
        params?: RestEndpointMethodTypes["apps"]["createFromManifest"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createFromManifest"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * This example grants the token "Read and write" permission to `issues` and "Read" permission to `contents`, and restricts the token's access to the repository with an `id` of 1296269.
     */
    createInstallationToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["createInstallationToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["createInstallationToken"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     *
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     */
    deleteAuthorization: {
      (
        params?: RestEndpointMethodTypes["apps"]["deleteAuthorization"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["deleteAuthorization"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Uninstalls a GitHub App on a user, organization, or business account.
     *
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    deleteInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["deleteInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["deleteInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     */
    deleteToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["deleteToken"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["deleteToken"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations](https://developer.github.com/v3/apps/#list-installations)" endpoint.
     *
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getAuthenticated: {
      (
        params?: RestEndpointMethodTypes["apps"]["getAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getAuthenticated"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    getBySlug: {
      (
        params?: RestEndpointMethodTypes["apps"]["getBySlug"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["getBySlug"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getOrgInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getOrgInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getOrgInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getRepoInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getRepoInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getRepoInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     */
    getSubscriptionPlanForAccount: {
      (
        params?: RestEndpointMethodTypes["apps"]["getSubscriptionPlanForAccount"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getSubscriptionPlanForAccount"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     */
    getSubscriptionPlanForAccountStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["getSubscriptionPlanForAccountStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getSubscriptionPlanForAccountStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     */
    getUserInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["getUserInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["getUserInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     */
    listAccountsForPlan: {
      (
        params?: RestEndpointMethodTypes["apps"]["listAccountsForPlan"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listAccountsForPlan"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     */
    listAccountsForPlanStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["listAccountsForPlanStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listAccountsForPlanStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @deprecated octokit.apps.listAccountsUserOrOrgOnPlan() has been renamed to octokit.apps.listAccountsForPlan() (2020-03-04)
     */
    listAccountsUserOrOrgOnPlan: {
      (
        params?: RestEndpointMethodTypes["apps"]["listAccountsUserOrOrgOnPlan"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listAccountsUserOrOrgOnPlan"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     * @deprecated octokit.apps.listAccountsUserOrOrgOnPlanStubbed() has been renamed to octokit.apps.listAccountsForPlanStubbed() (2020-03-04)
     */
    listAccountsUserOrOrgOnPlanStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["listAccountsUserOrOrgOnPlanStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listAccountsUserOrOrgOnPlanStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     */
    listInstallationReposForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["apps"]["listInstallationReposForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listInstallationReposForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     */
    listInstallations: {
      (
        params?: RestEndpointMethodTypes["apps"]["listInstallations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listInstallations"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     */
    listInstallationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["apps"]["listInstallationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listInstallationsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     * @deprecated octokit.apps.listMarketplacePurchasesForAuthenticatedUser() has been renamed to octokit.apps.listSubscriptionsForAuthenticatedUser() (2020-03-08)
     */
    listMarketplacePurchasesForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["apps"]["listMarketplacePurchasesForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listMarketplacePurchasesForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     * @deprecated octokit.apps.listMarketplacePurchasesForAuthenticatedUserStubbed() has been renamed to octokit.apps.listSubscriptionsForAuthenticatedUserStubbed() (2020-03-08)
     */
    listMarketplacePurchasesForAuthenticatedUserStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["listMarketplacePurchasesForAuthenticatedUserStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listMarketplacePurchasesForAuthenticatedUserStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all plans that are part of your GitHub Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     */
    listPlans: {
      (
        params?: RestEndpointMethodTypes["apps"]["listPlans"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["listPlans"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all plans that are part of your GitHub Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.
     */
    listPlansStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["listPlansStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listPlansStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List repositories that an installation can access.
     *
     * You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    listRepos: {
      (
        params?: RestEndpointMethodTypes["apps"]["listRepos"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["listRepos"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     */
    listSubscriptionsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["apps"]["listSubscriptionsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listSubscriptionsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     */
    listSubscriptionsForAuthenticatedUserStubbed: {
      (
        params?: RestEndpointMethodTypes["apps"]["listSubscriptionsForAuthenticatedUserStubbed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["listSubscriptionsForAuthenticatedUserStubbed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.
     */
    removeRepoFromInstallation: {
      (
        params?: RestEndpointMethodTypes["apps"]["removeRepoFromInstallation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["removeRepoFromInstallation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     */
    resetToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["resetToken"]["parameters"]
      ): Promise<RestEndpointMethodTypes["apps"]["resetToken"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     *
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create a new installation token](https://developer.github.com/v3/apps/#create-a-new-installation-token)" endpoint.
     *
     * You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     */
    revokeInstallationToken: {
      (
        params?: RestEndpointMethodTypes["apps"]["revokeInstallationToken"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["apps"]["revokeInstallationToken"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  checks: {
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["checks"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["create"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://developer.github.com/v3/checks/suites/#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
     */
    createSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["createSuite"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["createSuite"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["checks"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["get"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     */
    getSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["getSuite"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["getSuite"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
     */
    listAnnotations: {
      (
        params?: RestEndpointMethodTypes["checks"]["listAnnotations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["listAnnotations"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     */
    listForRef: {
      (
        params?: RestEndpointMethodTypes["checks"]["listForRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["listForRef"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     */
    listForSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["listForSuite"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["listForSuite"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     */
    listSuitesForRef: {
      (
        params?: RestEndpointMethodTypes["checks"]["listSuitesForRef"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["listSuitesForRef"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://developer.github.com/v3/activity/events/types/#checksuiteevent) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
     *
     * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
     */
    rerequestSuite: {
      (
        params?: RestEndpointMethodTypes["checks"]["rerequestSuite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["rerequestSuite"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Changes the default automatic flow when creating check suites. By default, the CheckSuiteEvent is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
     */
    setSuitesPreferences: {
      (
        params?: RestEndpointMethodTypes["checks"]["setSuitesPreferences"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["checks"]["setSuitesPreferences"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["checks"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["checks"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  codesOfConduct: {
    getAllCodesOfConduct: {
      (
        params?: RestEndpointMethodTypes["codesOfConduct"]["getAllCodesOfConduct"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["codesOfConduct"]["getAllCodesOfConduct"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getConductCode: {
      (
        params?: RestEndpointMethodTypes["codesOfConduct"]["getConductCode"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["codesOfConduct"]["getConductCode"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This method returns the contents of the repository's code of conduct file, if one is detected.
     */
    getForRepo: {
      (
        params?: RestEndpointMethodTypes["codesOfConduct"]["getForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["codesOfConduct"]["getForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.codesOfConduct.listConductCodes() has been renamed to octokit.codesOfConduct.getAllCodesOfConduct() (2020-03-04)
     */
    listConductCodes: {
      (
        params?: RestEndpointMethodTypes["codesOfConduct"]["listConductCodes"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["codesOfConduct"]["listConductCodes"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  emojis: {
    /**
     * Lists all the emojis available to use on GitHub.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["emojis"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["emojis"]["get"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  gists: {
    checkIsStarred: {
      (
        params?: RestEndpointMethodTypes["gists"]["checkIsStarred"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gists"]["checkIsStarred"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Allows you to add a new gist with one or more files.
     *
     * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["gists"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["create"]["response"]>;

      endpoint: EndpointInterface;
    };

    createComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["createComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["createComment"]["response"]>;

      endpoint: EndpointInterface;
    };

    delete: {
      (
        params?: RestEndpointMethodTypes["gists"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["delete"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["deleteComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["deleteComment"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note**: This was previously `/gists/:gist_id/fork`.
     */
    fork: {
      (
        params?: RestEndpointMethodTypes["gists"]["fork"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["fork"]["response"]>;

      endpoint: EndpointInterface;
    };

    get: {
      (params?: RestEndpointMethodTypes["gists"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["gists"]["get"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["getComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["getComment"]["response"]>;

      endpoint: EndpointInterface;
    };

    getRevision: {
      (
        params?: RestEndpointMethodTypes["gists"]["getRevision"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["getRevision"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     */
    list: {
      (
        params?: RestEndpointMethodTypes["gists"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["list"]["response"]>;

      endpoint: EndpointInterface;
    };

    listComments: {
      (
        params?: RestEndpointMethodTypes["gists"]["listComments"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listComments"]["response"]>;

      endpoint: EndpointInterface;
    };

    listCommits: {
      (
        params?: RestEndpointMethodTypes["gists"]["listCommits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listCommits"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists public gists for the specified user:
     */
    listForUser: {
      (
        params?: RestEndpointMethodTypes["gists"]["listForUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listForUser"]["response"]>;

      endpoint: EndpointInterface;
    };

    listForks: {
      (
        params?: RestEndpointMethodTypes["gists"]["listForks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listForks"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * List public gists sorted by most recently updated to least recently updated.
     *
     * Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     */
    listPublic: {
      (
        params?: RestEndpointMethodTypes["gists"]["listPublic"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listPublic"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists public gists for the specified user:
     * @deprecated octokit.gists.listPublicForUser() has been renamed to octokit.gists.listForUser() (2020-03-04)
     */
    listPublicForUser: {
      (
        params?: RestEndpointMethodTypes["gists"]["listPublicForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gists"]["listPublicForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the authenticated user's starred gists:
     */
    listStarred: {
      (
        params?: RestEndpointMethodTypes["gists"]["listStarred"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["listStarred"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     */
    star: {
      (
        params?: RestEndpointMethodTypes["gists"]["star"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["star"]["response"]>;

      endpoint: EndpointInterface;
    };

    unstar: {
      (
        params?: RestEndpointMethodTypes["gists"]["unstar"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["unstar"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["gists"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateComment: {
      (
        params?: RestEndpointMethodTypes["gists"]["updateComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["gists"]["updateComment"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  git: {
    createBlob: {
      (
        params?: RestEndpointMethodTypes["git"]["createBlob"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createBlob"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * In this example, the payload of the signature would be:
     *
     *
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    createCommit: {
      (
        params?: RestEndpointMethodTypes["git"]["createCommit"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createCommit"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
     */
    createRef: {
      (
        params?: RestEndpointMethodTypes["git"]["createRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createRef"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    createTag: {
      (
        params?: RestEndpointMethodTypes["git"]["createTag"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createTag"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
     *
     * If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)" and "[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference)."
     */
    createTree: {
      (
        params?: RestEndpointMethodTypes["git"]["createTree"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["createTree"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteRef: {
      (
        params?: RestEndpointMethodTypes["git"]["deleteRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["deleteRef"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * The `content` in the response will always be Base64 encoded.
     *
     * _Note_: This API supports blobs up to 100 megabytes in size.
     */
    getBlob: {
      (
        params?: RestEndpointMethodTypes["git"]["getBlob"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getBlob"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    getCommit: {
      (
        params?: RestEndpointMethodTypes["git"]["getCommit"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getCommit"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
     *
     * **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".
     *
     * To get the reference for a branch named `skunkworkz/featureA`, the endpoint route is:
     */
    getRef: {
      (
        params?: RestEndpointMethodTypes["git"]["getRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getRef"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    getTag: {
      (
        params?: RestEndpointMethodTypes["git"]["getTag"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getTag"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns a single tree using the SHA1 value for that tree.
     *
     * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, you can clone the repository and iterate over the Git data locally.
     */
    getTree: {
      (
        params?: RestEndpointMethodTypes["git"]["getTree"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["getTree"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
     *
     * When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
     *
     * **Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".
     *
     * If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
     */
    listMatchingRefs: {
      (
        params?: RestEndpointMethodTypes["git"]["listMatchingRefs"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["git"]["listMatchingRefs"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    updateRef: {
      (
        params?: RestEndpointMethodTypes["git"]["updateRef"]["parameters"]
      ): Promise<RestEndpointMethodTypes["git"]["updateRef"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  gitignore: {
    /**
     * The API also allows fetching the source of a single template.
     *
     * Use the raw [media type](https://developer.github.com/v3/media/) to get the raw contents.
     */
    getTemplate: {
      (
        params?: RestEndpointMethodTypes["gitignore"]["getTemplate"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gitignore"]["getTemplate"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all templates available to pass as an option when [creating a repository](https://developer.github.com/v3/repos/#create-a-repository-for-the-authenticated-user).
     */
    listTemplates: {
      (
        params?: RestEndpointMethodTypes["gitignore"]["listTemplates"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["gitignore"]["listTemplates"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  interactions: {
    /**
     * Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.
     */
    addOrUpdateRestrictionsForOrg: {
      (
        params?: RestEndpointMethodTypes["interactions"]["addOrUpdateRestrictionsForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["interactions"]["addOrUpdateRestrictionsForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.
     */
    addOrUpdateRestrictionsForRepo: {
      (
        params?: RestEndpointMethodTypes["interactions"]["addOrUpdateRestrictionsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["interactions"]["addOrUpdateRestrictionsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.
     */
    getRestrictionsForOrg: {
      (
        params?: RestEndpointMethodTypes["interactions"]["getRestrictionsForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["interactions"]["getRestrictionsForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     */
    getRestrictionsForRepo: {
      (
        params?: RestEndpointMethodTypes["interactions"]["getRestrictionsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["interactions"]["getRestrictionsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     */
    removeRestrictionsForOrg: {
      (
        params?: RestEndpointMethodTypes["interactions"]["removeRestrictionsForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["interactions"]["removeRestrictionsForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.
     */
    removeRestrictionsForRepo: {
      (
        params?: RestEndpointMethodTypes["interactions"]["removeRestrictionsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["interactions"]["removeRestrictionsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  issues: {
    /**
     * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
     *
     * This example adds two assignees to the existing `octocat` assignee.
     */
    addAssignees: {
      (
        params?: RestEndpointMethodTypes["issues"]["addAssignees"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["addAssignees"]["response"]>;

      endpoint: EndpointInterface;
    };

    addLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["addLabels"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["addLabels"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Checks if a user has permission to be assigned to an issue in this repository.
     *
     * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
     *
     * Otherwise a `404` status code is returned.
     */
    checkAssignee: {
      (
        params?: RestEndpointMethodTypes["issues"]["checkAssignee"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["checkAssignee"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["issues"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["create"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    createComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["createComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["createComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    createLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["createLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["createLabel"]["response"]>;

      endpoint: EndpointInterface;
    };

    createMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["createMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["createMilestone"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    deleteComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["deleteComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["deleteComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    deleteLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["deleteLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["deleteLabel"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["deleteMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["deleteMilestone"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * The API returns a [`301 Moved Permanently` status](https://developer.github.com/v3/#http-redirects) if the issue was [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe to the [`issues`](https://developer.github.com/v3/activity/events/types/#issuesevent) webhook.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["issues"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["get"]["response"]>;

      endpoint: EndpointInterface;
    };

    getComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["getComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getComment"]["response"]>;

      endpoint: EndpointInterface;
    };

    getEvent: {
      (
        params?: RestEndpointMethodTypes["issues"]["getEvent"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getEvent"]["response"]>;

      endpoint: EndpointInterface;
    };

    getLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["getLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getLabel"]["response"]>;

      endpoint: EndpointInterface;
    };

    getMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["getMilestone"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["getMilestone"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not necessarily assigned to you. See the [Parameters table](https://developer.github.com/v3/issues/#parameters) for more information.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["issues"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["list"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
     */
    listAssignees: {
      (
        params?: RestEndpointMethodTypes["issues"]["listAssignees"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listAssignees"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Issue Comments are ordered by ascending ID.
     */
    listComments: {
      (
        params?: RestEndpointMethodTypes["issues"]["listComments"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listComments"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * By default, Issue Comments are ordered by ascending ID.
     */
    listCommentsForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listCommentsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listCommentsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listEvents: {
      (
        params?: RestEndpointMethodTypes["issues"]["listEvents"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listEvents"]["response"]>;

      endpoint: EndpointInterface;
    };

    listEventsForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listEventsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listEventsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listEventsForTimeline: {
      (
        params?: RestEndpointMethodTypes["issues"]["listEventsForTimeline"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listEventsForTimeline"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List issues across owned and member repositories assigned to the authenticated user:
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["issues"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List issues in an organization assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["issues"]["listForOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listForOrg"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * List issues in a repository.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.
     */
    listForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listForRepo"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["listForRepo"]["response"]>;

      endpoint: EndpointInterface;
    };

    listLabelsForMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["listLabelsForMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listLabelsForMilestone"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listLabelsForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listLabelsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listLabelsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listLabelsOnIssue: {
      (
        params?: RestEndpointMethodTypes["issues"]["listLabelsOnIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listLabelsOnIssue"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listMilestonesForRepo: {
      (
        params?: RestEndpointMethodTypes["issues"]["listMilestonesForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["listMilestonesForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access can lock an issue or pull request's conversation.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     */
    lock: {
      (
        params?: RestEndpointMethodTypes["issues"]["lock"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["lock"]["response"]>;

      endpoint: EndpointInterface;
    };

    removeAllLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeAllLabels"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["removeAllLabels"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removes one or more assignees from an issue.
     *
     * This example removes two of three assignees, leaving the `octocat` assignee.
     */
    removeAssignees: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeAssignees"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["removeAssignees"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
     */
    removeLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["removeLabel"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.issues.removeLabels() has been renamed to octokit.issues.removeAllLabels() (2020-03-04)
     */
    removeLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["removeLabels"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["removeLabels"]["response"]>;

      endpoint: EndpointInterface;
    };

    replaceAllLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["replaceAllLabels"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["replaceAllLabels"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.issues.replaceLabels() has been renamed to octokit.issues.replaceAllLabels() (2020-03-04)
     */
    replaceLabels: {
      (
        params?: RestEndpointMethodTypes["issues"]["replaceLabels"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["replaceLabels"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access can unlock an issue's conversation.
     */
    unlock: {
      (
        params?: RestEndpointMethodTypes["issues"]["unlock"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["unlock"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Issue owners and users with push access can edit an issue.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["issues"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateComment: {
      (
        params?: RestEndpointMethodTypes["issues"]["updateComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["updateComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    updateLabel: {
      (
        params?: RestEndpointMethodTypes["issues"]["updateLabel"]["parameters"]
      ): Promise<RestEndpointMethodTypes["issues"]["updateLabel"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateMilestone: {
      (
        params?: RestEndpointMethodTypes["issues"]["updateMilestone"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["issues"]["updateMilestone"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  licenses: {
    get: {
      (
        params?: RestEndpointMethodTypes["licenses"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["licenses"]["get"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * This method returns the contents of the repository's license file, if one is detected.
     *
     * Similar to [the repository contents API](https://developer.github.com/v3/repos/contents/#get-contents), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.
     */
    getForRepo: {
      (
        params?: RestEndpointMethodTypes["licenses"]["getForRepo"]["parameters"]
      ): Promise<RestEndpointMethodTypes["licenses"]["getForRepo"]["response"]>;

      endpoint: EndpointInterface;
    };

    listCommonlyUsed: {
      (
        params?: RestEndpointMethodTypes["licenses"]["listCommonlyUsed"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["licenses"]["listCommonlyUsed"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  markdown: {
    render: {
      (
        params?: RestEndpointMethodTypes["markdown"]["render"]["parameters"]
      ): Promise<RestEndpointMethodTypes["markdown"]["render"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     */
    renderRaw: {
      (
        params?: RestEndpointMethodTypes["markdown"]["renderRaw"]["parameters"]
      ): Promise<RestEndpointMethodTypes["markdown"]["renderRaw"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  meta: {
    /**
     * This endpoint provides a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."
     */
    get: {
      (params?: RestEndpointMethodTypes["meta"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["meta"]["get"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  migrations: {
    /**
     * Stop an import for a repository.
     */
    cancelImport: {
      (
        params?: RestEndpointMethodTypes["migrations"]["cancelImport"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["cancelImport"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://developer.github.com/v3/migrations/users/#list-user-migrations) and [Get the status of a user migration](https://developer.github.com/v3/migrations/users/#get-the-status-of-a-user-migration) endpoints, will continue to be available even after an archive is deleted.
     */
    deleteArchiveForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["deleteArchiveForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["deleteArchiveForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
     */
    deleteArchiveForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["deleteArchiveForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["deleteArchiveForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Fetches the URL to a migration archive.
     */
    downloadArchiveForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["downloadArchiveForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["downloadArchiveForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
     *
     * *   attachments
     * *   bases
     * *   commit\_comments
     * *   issue\_comments
     * *   issue\_events
     * *   issues
     * *   milestones
     * *   organizations
     * *   projects
     * *   protected\_branches
     * *   pull\_request\_reviews
     * *   pull\_requests
     * *   releases
     * *   repositories
     * *   review\_comments
     * *   schema
     * *   users
     *
     * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
     */
    getArchiveForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["getArchiveForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["getArchiveForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
     *
     * This API method and the "Map a commit author" method allow you to provide correct Git author information.
     */
    getCommitAuthors: {
      (
        params?: RestEndpointMethodTypes["migrations"]["getCommitAuthors"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["getCommitAuthors"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * View the progress of an import.
     *
     * **Import status**
     *
     * This section includes details about the possible values of the `status` field of the Import Progress response.
     *
     * An import that does not have errors will progress through these steps:
     *
     * *   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
     * *   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
     * *   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
     * *   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
     * *   `complete` - the import is complete, and the repository is ready on GitHub.
     *
     * If there are problems, you will see one of these in the `status` field:
     *
     * *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update Existing Import](https://developer.github.com/v3/migrations/source_imports/#update-existing-import) section.
     * *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
     * *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update Existing Import](https://developer.github.com/v3/migrations/source_imports/#update-existing-import) section.
     * *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import) and [retry](https://developer.github.com/v3/migrations/source_imports/#start-an-import) with the correct URL.
     * *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update Existing Import](https://developer.github.com/v3/migrations/source_imports/#update-existing-import) section.
     *
     * **The project_choices field**
     *
     * When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
     *
     * **Git LFS related fields**
     *
     * This section includes details about Git LFS related fields that may be present in the Import Progress response.
     *
     * *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
     * *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
     * *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
     * *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.
     */
    getImportProgress: {
      (
        params?: RestEndpointMethodTypes["migrations"]["getImportProgress"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["getImportProgress"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List files larger than 100MB found during the import
     */
    getLargeFiles: {
      (
        params?: RestEndpointMethodTypes["migrations"]["getLargeFiles"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["getLargeFiles"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
     *
     * *   `pending` - the migration hasn't started yet.
     * *   `exporting` - the migration is in progress.
     * *   `exported` - the migration finished successfully.
     * *   `failed` - the migration failed.
     *
     * Once the migration has been `exported` you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).
     */
    getStatusForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["getStatusForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["getStatusForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Fetches the status of a migration.
     *
     * The `state` of a migration can be one of the following values:
     *
     * *   `pending`, which means the migration hasn't started yet.
     * *   `exporting`, which means the migration is in progress.
     * *   `exported`, which means the migration finished successfully.
     * *   `failed`, which means the migration failed.
     */
    getStatusForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["getStatusForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["getStatusForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all migrations a user has started.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["listForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the most recent migrations.
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["listForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["listForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all the repositories for this organization migration.
     */
    listReposForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["listReposForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["listReposForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all the repositories for this user migration.
     */
    listReposForUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["listReposForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["listReposForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
     */
    mapCommitAuthor: {
      (
        params?: RestEndpointMethodTypes["migrations"]["mapCommitAuthor"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["mapCommitAuthor"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
     */
    setLfsPreference: {
      (
        params?: RestEndpointMethodTypes["migrations"]["setLfsPreference"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["setLfsPreference"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Initiates the generation of a user migration archive.
     */
    startForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["startForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["startForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Initiates the generation of a migration archive.
     */
    startForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["startForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["startForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Start a source import to a GitHub repository using GitHub Importer.
     */
    startImport: {
      (
        params?: RestEndpointMethodTypes["migrations"]["startImport"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["startImport"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Unlocks a repository. You can lock repositories when you [start a user migration](https://developer.github.com/v3/migrations/users/#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
     */
    unlockRepoForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["migrations"]["unlockRepoForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["unlockRepoForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.
     */
    unlockRepoForOrg: {
      (
        params?: RestEndpointMethodTypes["migrations"]["unlockRepoForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["unlockRepoForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.
     *
     * Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array. You can select the project to import by providing one of the objects in the `project_choices` array in the update request.
     *
     * The following example demonstrates the workflow for updating an import with "project1" as the project choice. Given a `project_choices` array like such:
     *
     * To restart an import, no parameters are provided in the update request.
     */
    updateImport: {
      (
        params?: RestEndpointMethodTypes["migrations"]["updateImport"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["migrations"]["updateImport"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  orgs: {
    /**
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://developer.github.com/v3/orgs/members/#get-organization-membership) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     */
    addOrUpdateMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["addOrUpdateMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["addOrUpdateMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    blockUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["blockUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["blockUser"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * If the user is blocked:
     *
     * If the user is not blocked:
     */
    checkBlockedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["checkBlockedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["checkBlockedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Check if a user is, publicly or privately, a member of the organization.
     */
    checkMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["checkMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["checkMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    checkPublicMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["checkPublicMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["checkPublicMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    concealMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["concealMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["concealMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".
     */
    convertMemberToOutsideCollaborator: {
      (
        params?: RestEndpointMethodTypes["orgs"]["convertMemberToOutsideCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["convertMemberToOutsideCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Here's how you can create a hook that posts payloads in JSON format:
     */
    createHook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["createHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["createHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    createInvitation: {
      (
        params?: RestEndpointMethodTypes["orgs"]["createInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["createInvitation"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    deleteHook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["deleteHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["deleteHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see "[Response with GitHub plan information](https://developer.github.com/v3/orgs/#response-with-github-plan-information)."
     */
    get: {
      (params?: RestEndpointMethodTypes["orgs"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["orgs"]["get"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getHook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["getHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * In order to get a user's membership with an organization, the authenticated user must be an organization member.
     */
    getMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getMembership"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["getMembership"]["response"]>;

      endpoint: EndpointInterface;
    };

    getMembershipForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getMembershipForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["getMembershipForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all organizations, in the order that they were created on GitHub.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of organizations.
     */
    list: {
      (params?: RestEndpointMethodTypes["orgs"]["list"]["parameters"]): Promise<
        RestEndpointMethodTypes["orgs"]["list"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the users blocked by an organization.
     */
    listBlockedUsers: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listBlockedUsers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listBlockedUsers"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List your organizations](https://developer.github.com/v3/orgs/#list-your-organizations) API instead.
     */
    listForUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listForUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["listForUser"]["response"]>;

      endpoint: EndpointInterface;
    };

    listHooks: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listHooks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["listHooks"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     */
    listInstallations: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listInstallations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listInstallations"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
     */
    listInvitationTeams: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listInvitationTeams"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listInvitationTeams"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     */
    listMembers: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listMembers"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["listMembers"]["response"]>;

      endpoint: EndpointInterface;
    };

    listMemberships: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listMemberships"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listMemberships"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all users who are outside collaborators of an organization.
     */
    listOutsideCollaborators: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listOutsideCollaborators"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listOutsideCollaborators"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     */
    listPendingInvitations: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listPendingInvitations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listPendingInvitations"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Members of an organization can choose to have their membership publicized or not.
     */
    listPublicMembers: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listPublicMembers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listPublicMembers"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.
     */
    pingHook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["pingHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["pingHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     */
    publicizeMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["publicizeMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["publicizeMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     */
    removeMember: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeMember"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["removeMember"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     */
    removeMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["removeMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removing a user from this list will remove them from all the organization's repositories.
     */
    removeOutsideCollaborator: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeOutsideCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["removeOutsideCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    unblockUser: {
      (
        params?: RestEndpointMethodTypes["orgs"]["unblockUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["unblockUser"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["orgs"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateHook: {
      (
        params?: RestEndpointMethodTypes["orgs"]["updateHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["orgs"]["updateHook"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateMembership: {
      (
        params?: RestEndpointMethodTypes["orgs"]["updateMembership"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["orgs"]["updateMembership"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  projects: {
    /**
     * Adds a collaborator to a an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
     */
    addCollaborator: {
      (
        params?: RestEndpointMethodTypes["projects"]["addCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["addCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.
     */
    createCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["createCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["createCard"]["response"]>;

      endpoint: EndpointInterface;
    };

    createColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["createColumn"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createColumn"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    createForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["projects"]["createForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    createForOrg: {
      (
        params?: RestEndpointMethodTypes["projects"]["createForOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createForOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    createForRepo: {
      (
        params?: RestEndpointMethodTypes["projects"]["createForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["createForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     */
    delete: {
      (
        params?: RestEndpointMethodTypes["projects"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["delete"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["deleteCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["deleteCard"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["deleteColumn"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["deleteColumn"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["projects"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["get"]["response"]>;

      endpoint: EndpointInterface;
    };

    getCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["getCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["getCard"]["response"]>;

      endpoint: EndpointInterface;
    };

    getColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["getColumn"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["getColumn"]["response"]>;

      endpoint: EndpointInterface;
    };

    listCards: {
      (
        params?: RestEndpointMethodTypes["projects"]["listCards"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["listCards"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     */
    listCollaborators: {
      (
        params?: RestEndpointMethodTypes["projects"]["listCollaborators"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listCollaborators"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listColumns: {
      (
        params?: RestEndpointMethodTypes["projects"]["listColumns"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listColumns"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * s
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["projects"]["listForOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["listForOrg"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    listForRepo: {
      (
        params?: RestEndpointMethodTypes["projects"]["listForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listForUser: {
      (
        params?: RestEndpointMethodTypes["projects"]["listForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["listForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    moveCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["moveCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["moveCard"]["response"]>;

      endpoint: EndpointInterface;
    };

    moveColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["moveColumn"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["moveColumn"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     */
    removeCollaborator: {
      (
        params?: RestEndpointMethodTypes["projects"]["removeCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["removeCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     */
    reviewUserPermissionLevel: {
      (
        params?: RestEndpointMethodTypes["projects"]["reviewUserPermissionLevel"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["reviewUserPermissionLevel"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["projects"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateCard: {
      (
        params?: RestEndpointMethodTypes["projects"]["updateCard"]["parameters"]
      ): Promise<RestEndpointMethodTypes["projects"]["updateCard"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateColumn: {
      (
        params?: RestEndpointMethodTypes["projects"]["updateColumn"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["projects"]["updateColumn"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  pulls: {
    checkIfMerged: {
      (
        params?: RestEndpointMethodTypes["pulls"]["checkIfMerged"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["checkIfMerged"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     *
     * You can create a new pull request.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["pulls"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["create"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.
     *
     * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Comments](https://developer.github.com/v3/issues/comments/#create-a-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
     *
     * You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see [Multi-line comment summary](https://developer.github.com/v3/pulls/comments/#multi-line-comment-summary-3).
     *
     * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     *
     * **Multi-line comment summary**
     *
     * **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.
     *
     * Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.
     *
     * If you use the `comfort-fade` preview header, your response will show:
     *
     * *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
     * *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.
     *
     * If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:
     *
     * *   For multi-line comments, the last line of the comment range for the `position` attribute.
     * *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     */
    createComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["createComment"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     *
     * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) endpoint.
     *
     * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     */
    createReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["createReview"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    createReviewCommentReply: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createReviewCommentReply"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["createReviewCommentReply"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    createReviewRequest: {
      (
        params?: RestEndpointMethodTypes["pulls"]["createReviewRequest"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["createReviewRequest"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a review comment.
     */
    deleteComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["deleteComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["deleteComment"]["response"]>;

      endpoint: EndpointInterface;
    };

    deletePendingReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["deletePendingReview"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["deletePendingReview"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    deleteReviewRequest: {
      (
        params?: RestEndpointMethodTypes["pulls"]["deleteReviewRequest"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["deleteReviewRequest"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
     */
    dismissReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["dismissReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["dismissReview"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists details of a pull request by providing its number.
     *
     * When you get, [create](https://developer.github.com/v3/pulls/#create-a-pull-request), or [edit](https://developer.github.com/v3/pulls/#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".
     *
     * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
     *
     * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
     *
     * *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
     * *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
     * *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
     *
     * Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     */
    get: {
      (params?: RestEndpointMethodTypes["pulls"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["pulls"]["get"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.
     *
     * Provides details for a review comment.
     *
     * **Multi-line comment summary**
     *
     * **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.
     *
     * Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.
     *
     * If you use the `comfort-fade` preview header, your response will show:
     *
     * *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
     * *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.
     *
     * If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:
     *
     * *   For multi-line comments, the last line of the comment range for the `position` attribute.
     * *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     *
     * The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
     */
    getComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["getComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["getComment"]["response"]>;

      endpoint: EndpointInterface;
    };

    getCommentsForReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["getCommentsForReview"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["getCommentsForReview"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["getReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["getReview"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["pulls"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["list"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.
     *
     * Lists review comments for a pull request. By default, review comments are in ascending order by ID.
     *
     * **Multi-line comment summary**
     *
     * **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.
     *
     * Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.
     *
     * If you use the `comfort-fade` preview header, your response will show:
     *
     * *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
     * *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.
     *
     * If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:
     *
     * *   For multi-line comments, the last line of the comment range for the `position` attribute.
     * *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     *
     * The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
     */
    listComments: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listComments"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listComments"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.
     *
     * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
     *
     * **Multi-line comment summary**
     *
     * **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.
     *
     * Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.
     *
     * If you use the `comfort-fade` preview header, your response will show:
     *
     * *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
     * *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.
     *
     * If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:
     *
     * *   For multi-line comments, the last line of the comment range for the `position` attribute.
     * *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     *
     * The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.
     */
    listCommentsForRepo: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listCommentsForRepo"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["listCommentsForRepo"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [Commit List API](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository).
     */
    listCommits: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listCommits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listCommits"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
     */
    listFiles: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listFiles"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listFiles"]["response"]>;

      endpoint: EndpointInterface;
    };

    listReviewRequests: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listReviewRequests"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["pulls"]["listReviewRequests"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * The list of reviews returns in chronological order.
     */
    listReviews: {
      (
        params?: RestEndpointMethodTypes["pulls"]["listReviews"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["listReviews"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    merge: {
      (
        params?: RestEndpointMethodTypes["pulls"]["merge"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["merge"]["response"]>;

      endpoint: EndpointInterface;
    };

    submitReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["submitReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["submitReview"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["pulls"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
     */
    updateBranch: {
      (
        params?: RestEndpointMethodTypes["pulls"]["updateBranch"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["updateBranch"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** Multi-line comments on pull requests are currently in public beta and subject to change.
     *
     * Enables you to edit a review comment.
     *
     * **Multi-line comment summary**
     *
     * **Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.
     *
     * Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.
     *
     * If you use the `comfort-fade` preview header, your response will show:
     *
     * *   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
     * *   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.
     *
     * If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:
     *
     * *   For multi-line comments, the last line of the comment range for the `position` attribute.
     * *   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.
     */
    updateComment: {
      (
        params?: RestEndpointMethodTypes["pulls"]["updateComment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["updateComment"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Update the review summary comment with new text.
     */
    updateReview: {
      (
        params?: RestEndpointMethodTypes["pulls"]["updateReview"]["parameters"]
      ): Promise<RestEndpointMethodTypes["pulls"]["updateReview"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  rateLimit: {
    /**
     * **Note:** Accessing this endpoint does not count against your REST API rate limit.
     *
     * **Understanding your rate limit status**
     *
     * The Search API has a [custom rate limit](https://developer.github.com/v3/search/#rate-limit), separate from the rate limit governing the rest of the REST API. The GraphQL API also has a [custom rate limit](https://developer.github.com/v4/guides/resource-limitations/#rate-limit) that is separate from and calculated differently than rate limits in the REST API.
     *
     * For these reasons, the Rate Limit API response categorizes your rate limit. Under `resources`, you'll see four objects:
     *
     * *   The `core` object provides your rate limit status for all non-search-related resources in the REST API.
     * *   The `search` object provides your rate limit status for the [Search API](https://developer.github.com/v3/search/).
     * *   The `graphql` object provides your rate limit status for the [GraphQL API](https://developer.github.com/v4/).
     * *   The `integration_manifest` object provides your rate limit status for the [GitHub App Manifest code conversion](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) endpoint.
     *
     * For more information on the headers and values in the rate limit response, see "[Rate limiting](https://developer.github.com/v3/#rate-limiting)."
     *
     * The `rate` object (shown at the bottom of the response above) is deprecated.
     *
     * If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
     */
    get: {
      (
        params?: RestEndpointMethodTypes["rateLimit"]["get"]["parameters"]
      ): Promise<RestEndpointMethodTypes["rateLimit"]["get"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  reactions: {
    /**
     * Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.
     */
    createForCommitComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.
     */
    createForIssue: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForIssue"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue comment.
     */
    createForIssueComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForIssueComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForIssueComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.
     */
    createForPullRequestReviewComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForPullRequestReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForPullRequestReviewComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     */
    createForTeamDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForTeamDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForTeamDiscussionCommentInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     */
    createForTeamDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["createForTeamDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["createForTeamDiscussionInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).
     * @deprecated octokit.reactions.delete() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy
     */
    delete: {
      (
        params?: RestEndpointMethodTypes["reactions"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["reactions"]["delete"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/).
     */
    deleteForCommitComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://developer.github.com/v3/issues/).
     */
    deleteForIssue: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForIssue"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/).
     */
    deleteForIssueComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForIssueComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForIssueComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
     */
    deleteForPullRequestComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForPullRequestComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForPullRequestComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deleteForTeamDiscussion: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussion"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussion"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deleteForTeamDiscussionComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussionComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteForTeamDiscussionComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).
     * @deprecated octokit.reactions.deleteLegacy() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy
     */
    deleteLegacy: {
      (
        params?: RestEndpointMethodTypes["reactions"]["deleteLegacy"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["deleteLegacy"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).
     */
    listForCommitComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the reactions to an [issue](https://developer.github.com/v3/issues/).
     */
    listForIssue: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForIssue"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForIssue"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).
     */
    listForIssueComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForIssueComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForIssueComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).
     */
    listForPullRequestReviewComment: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForPullRequestReviewComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForPullRequestReviewComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     */
    listForTeamDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForTeamDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForTeamDiscussionCommentInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     */
    listForTeamDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["reactions"]["listForTeamDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["reactions"]["listForTeamDiscussionInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  repos: {
    acceptInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["acceptInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["acceptInvitation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     *
     * For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)" in the GitHub Help documentation.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     *
     * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://developer.github.com/v3/repos/invitations/).
     *
     * **Rate limits**
     *
     * To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     */
    addCollaborator: {
      (
        params?: RestEndpointMethodTypes["repos"]["addCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Here's how you can create a read-only deploy key:
     */
    addDeployKey: {
      (
        params?: RestEndpointMethodTypes["repos"]["addDeployKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["addDeployKey"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     */
    addProtectedBranchAdminEnforcement: {
      (
        params?: RestEndpointMethodTypes["repos"]["addProtectedBranchAdminEnforcement"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addProtectedBranchAdminEnforcement"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    addProtectedBranchAppRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["addProtectedBranchAppRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addProtectedBranchAppRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
     */
    addProtectedBranchRequiredSignatures: {
      (
        params?: RestEndpointMethodTypes["repos"]["addProtectedBranchRequiredSignatures"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addProtectedBranchRequiredSignatures"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    addProtectedBranchRequiredStatusChecksContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["addProtectedBranchRequiredStatusChecksContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addProtectedBranchRequiredStatusChecksContexts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified teams push access for this branch. You can also give push access to child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    addProtectedBranchTeamRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["addProtectedBranchTeamRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addProtectedBranchTeamRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified people push access for this branch.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    addProtectedBranchUserRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["addProtectedBranchUserRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["addProtectedBranchUserRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     */
    checkCollaborator: {
      (
        params?: RestEndpointMethodTypes["repos"]["checkCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["checkCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Shows whether vulnerability alerts are enabled or disabled for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)" in the GitHub Help documentation.
     */
    checkVulnerabilityAlerts: {
      (
        params?: RestEndpointMethodTypes["repos"]["checkVulnerabilityAlerts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["checkVulnerabilityAlerts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`.
     *
     * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
     *
     * **Working with large comparisons**
     *
     * The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [Commit List API](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository) to enumerate all commits in the range.
     *
     * For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long to generate. You can typically resolve this error by using a smaller commit range.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    compareCommits: {
      (
        params?: RestEndpointMethodTypes["repos"]["compareCommits"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["compareCommits"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a comment for a commit using its `:commit_sha`.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    createCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["createCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deployments offer a few configurable parameters with sane defaults.
     *
     * The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them before we merge a pull request.
     *
     * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter makes it easier to track which environments have requested deployments. The default environment is `production`.
     *
     * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response.
     *
     * By default, [commit statuses](https://developer.github.com/v3/repos/statuses) for every submitted context must be in a `success` state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed.
     *
     * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched.
     *
     * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled.
     *
     * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref:
     *
     * A simple example putting the user and room into the payload to notify back to chat networks.
     *
     * A more advanced example specifying required commit statuses and bypassing auto-merging.
     *
     * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating a deployment. This auto-merge happens when:
     *
     * *   Auto-merge option is enabled in the repository
     * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
     * *   There are no merge conflicts
     *
     * If there are no new commits in the base branch, a new request to create a deployment should give a successful response.
     *
     * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
     *
     * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success` status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
     */
    createDeployment: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDeployment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDeployment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with `push` access can create deployment statuses for a given deployment.
     *
     * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
     */
    createDeploymentStatus: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDeploymentStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDeploymentStatus"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://developer.github.com/v3/activity/events/types/#repositorydispatchevent)."
     *
     * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow. For a test example, see the [input example](https://developer.github.com/v3/repos/#example-4).
     *
     * To give you write access to the repository, you must use a personal access token with the `repo` scope. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
     *
     * This input example shows how you can use the `client_payload` as a test to debug your workflow.
     */
    createDispatchEvent: {
      (
        params?: RestEndpointMethodTypes["repos"]["createDispatchEvent"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createDispatchEvent"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new repository for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository
     * *   `repo` scope to create a private repository
     */
    createForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["createForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Create a fork for the authenticated user.
     *
     * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com).
     */
    createFork: {
      (
        params?: RestEndpointMethodTypes["repos"]["createFork"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createFork"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can share the same `config` as long as those webhooks do not have any `events` that overlap.
     *
     * Here's how you can create a hook that posts payloads in JSON format:
     */
    createHook: {
      (
        params?: RestEndpointMethodTypes["repos"]["createHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository
     * *   `repo` scope to create a private repository
     */
    createInOrg: {
      (
        params?: RestEndpointMethodTypes["repos"]["createInOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createInOrg"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new file or updates an existing file in a repository.
     */
    createOrUpdateFile: {
      (
        params?: RestEndpointMethodTypes["repos"]["createOrUpdateFile"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createOrUpdateFile"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access to the repository can create a release.
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     */
    createRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["createRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createRelease"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access in a repository can create commit statuses for a given SHA.
     *
     * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
     */
    createStatus: {
      (
        params?: RestEndpointMethodTypes["repos"]["createStatus"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["createStatus"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://developer.github.com/v3/repos/#get-a-repository) endpoint and check that the `is_template` key is `true`.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository
     * *   `repo` scope to create a private repository
     *
     * \`
     */
    createUsingTemplate: {
      (
        params?: RestEndpointMethodTypes["repos"]["createUsingTemplate"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["createUsingTemplate"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    declineInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["declineInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["declineInvitation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
     *
     * If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:
     */
    delete: {
      (
        params?: RestEndpointMethodTypes["repos"]["delete"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["delete"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.
     *
     * To set a deployment as inactive, you must:
     *
     * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
     * *   Mark the active deployment as inactive by adding any non-successful deployment status.
     *
     * For more information, see "[Create a deployment](https://developer.github.com/v3/repos/deployments/#create-a-deployment)" and "[Create a deployment status](https://developer.github.com/v3/repos/deployments/#create-a-deployment-status)."
     */
    deleteDeployment: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteDeployment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteDeployment"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    deleteDownload: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteDownload"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteDownload"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a file in a repository.
     *
     * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
     *
     * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
     *
     * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
     */
    deleteFile: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteFile"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["deleteFile"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteHook: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["deleteHook"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteInvitation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access to the repository can delete a release.
     */
    deleteRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["deleteRelease"]["response"]>;

      endpoint: EndpointInterface;
    };

    deleteReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["deleteReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["deleteReleaseAsset"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)" in the GitHub Help documentation.
     */
    disableAutomatedSecurityFixes: {
      (
        params?: RestEndpointMethodTypes["repos"]["disableAutomatedSecurityFixes"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["disableAutomatedSecurityFixes"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    disablePagesSite: {
      (
        params?: RestEndpointMethodTypes["repos"]["disablePagesSite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["disablePagesSite"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Disables vulnerability alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)" in the GitHub Help documentation.
     */
    disableVulnerabilityAlerts: {
      (
        params?: RestEndpointMethodTypes["repos"]["disableVulnerabilityAlerts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["disableVulnerabilityAlerts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)" in the GitHub Help documentation.
     */
    enableAutomatedSecurityFixes: {
      (
        params?: RestEndpointMethodTypes["repos"]["enableAutomatedSecurityFixes"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["enableAutomatedSecurityFixes"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    enablePagesSite: {
      (
        params?: RestEndpointMethodTypes["repos"]["enablePagesSite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["enablePagesSite"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Enables vulnerability alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)" in the GitHub Help documentation.
     */
    enableVulnerabilityAlerts: {
      (
        params?: RestEndpointMethodTypes["repos"]["enableVulnerabilityAlerts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["enableVulnerabilityAlerts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
     *
     * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
     */
    get: {
      (params?: RestEndpointMethodTypes["repos"]["get"]["parameters"]): Promise<
        RestEndpointMethodTypes["repos"]["get"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getAllTopics: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAllTopics"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getAllTopics"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     */
    getAppsWithAccessToProtectedBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getAppsWithAccessToProtectedBranch"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getAppsWithAccessToProtectedBranch"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a redirect URL to download an archive for a repository. The `:archive_format` can be either `tarball` or `zipball`. The `:ref` must be a valid Git reference. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request.
     *
     * _Note_: For private repositories, these links are temporary and expire after five minutes.
     *
     * To follow redirects with curl, use the `-L` switch:
     */
    getArchiveLink: {
      (
        params?: RestEndpointMethodTypes["repos"]["getArchiveLink"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getArchiveLink"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getBranch"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getBranch"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["getBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getBranchProtection"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     */
    getClones: {
      (
        params?: RestEndpointMethodTypes["repos"]["getClones"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getClones"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     */
    getCodeFrequencyStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCodeFrequencyStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCodeFrequencyStats"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
     */
    getCollaboratorPermissionLevel: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCollaboratorPermissionLevel"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCollaboratorPermissionLevel"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
     *
     * The most recent status for each context is returned, up to 100. This field [paginates](https://developer.github.com/v3/#pagination) if there are over 100 contexts.
     *
     * Additionally, a combined `state` is returned. The `state` is one of:
     *
     * *   **failure** if any of the contexts report as `error` or `failure`
     * *   **pending** if there are no statuses or a context is `pending`
     * *   **success** if the latest status for all contexts is `success`
     */
    getCombinedStatusForRef: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCombinedStatusForRef"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCombinedStatusForRef"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
     *
     * You can pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
     *
     * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    getCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommit"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getCommit"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
     */
    getCommitActivityStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommitActivityStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCommitActivityStats"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["getCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit `:path`, you will receive the contents of all files in the repository.
     *
     * Files and symlinks support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML (when supported). All content types support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) to ensure the content is returned in a consistent object format.
     *
     * **Note**:
     *
     * *   To get a repository's contents recursively, you can [recursively get the tree](https://developer.github.com/v3/git/trees/).
     * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees API](https://developer.github.com/v3/git/trees/#get-a-tree).
     * *   This API supports files up to 1 megabyte in size.
     *
     * The response will be an array of objects, one object for each item in the directory.
     *
     * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW). In the next major version of the API, the type will be returned as "submodule".
     *
     * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the API responds with the content of the file (in the [format shown above](https://developer.github.com/v3/repos/contents/#response-if-content-is-a-file)).
     *
     * Otherwise, the API responds with an object describing the symlink itself:
     *
     * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit.
     *
     * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the github.com URLs (`html_url` and `_links["html"]`) will have null values.
     */
    getContents: {
      (
        params?: RestEndpointMethodTypes["repos"]["getContents"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getContents"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * *   `total` - The Total number of commits authored by the contributor.
     *
     * Weekly Hash (`weeks` array):
     *
     * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     * *   `a` - Number of additions
     * *   `d` - Number of deletions
     * *   `c` - Number of commits
     */
    getContributorsStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getContributorsStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getContributorsStats"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getDeployKey: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDeployKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getDeployKey"]["response"]>;

      endpoint: EndpointInterface;
    };

    getDeployment: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDeployment"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getDeployment"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Users with pull access can view a deployment status for a deployment:
     */
    getDeploymentStatus: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDeploymentStatus"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getDeploymentStatus"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getDownload: {
      (
        params?: RestEndpointMethodTypes["repos"]["getDownload"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getDownload"]["response"]>;

      endpoint: EndpointInterface;
    };

    getHook: {
      (
        params?: RestEndpointMethodTypes["repos"]["getHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getHook"]["response"]>;

      endpoint: EndpointInterface;
    };

    getLatestPagesBuild: {
      (
        params?: RestEndpointMethodTypes["repos"]["getLatestPagesBuild"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getLatestPagesBuild"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * View the latest published full release for the repository.
     *
     * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
     */
    getLatestRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["getLatestRelease"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getLatestRelease"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    getPages: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPages"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getPages"]["response"]>;

      endpoint: EndpointInterface;
    };

    getPagesBuild: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPagesBuild"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getPagesBuild"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
     *
     * The array order is oldest week (index 0) to most recent week.
     */
    getParticipationStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getParticipationStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getParticipationStats"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getProtectedBranchAdminEnforcement: {
      (
        params?: RestEndpointMethodTypes["repos"]["getProtectedBranchAdminEnforcement"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getProtectedBranchAdminEnforcement"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getProtectedBranchPullRequestReviewEnforcement: {
      (
        params?: RestEndpointMethodTypes["repos"]["getProtectedBranchPullRequestReviewEnforcement"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getProtectedBranchPullRequestReviewEnforcement"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.
     *
     * **Note**: You must enable branch protection to require signed commits.
     */
    getProtectedBranchRequiredSignatures: {
      (
        params?: RestEndpointMethodTypes["repos"]["getProtectedBranchRequiredSignatures"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getProtectedBranchRequiredSignatures"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    getProtectedBranchRequiredStatusChecks: {
      (
        params?: RestEndpointMethodTypes["repos"]["getProtectedBranchRequiredStatusChecks"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getProtectedBranchRequiredStatusChecks"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists who has access to this protected branch. {{#note}}
     *
     * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
     */
    getProtectedBranchRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["getProtectedBranchRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getProtectedBranchRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Each array contains the day number, hour number, and number of commits:
     *
     * *   `0-6`: Sunday - Saturday
     * *   `0-23`: Hour of day
     * *   Number of commits
     *
     * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     */
    getPunchCardStats: {
      (
        params?: RestEndpointMethodTypes["repos"]["getPunchCardStats"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getPunchCardStats"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Gets the preferred README for a repository.
     *
     * READMEs support [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML.
     */
    getReadme: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReadme"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getReadme"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://developer.github.com/v3/#hypermedia).
     */
    getRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["getRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getRelease"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://developer.github.com/v3/media/#media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     */
    getReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getReleaseAsset"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Get a published release with the specified tag.
     */
    getReleaseByTag: {
      (
        params?: RestEndpointMethodTypes["repos"]["getReleaseByTag"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getReleaseByTag"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the teams who have push access to this branch. The list includes child teams.
     */
    getTeamsWithAccessToProtectedBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getTeamsWithAccessToProtectedBranch"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getTeamsWithAccessToProtectedBranch"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Get the top 10 popular contents over the last 14 days.
     */
    getTopPaths: {
      (
        params?: RestEndpointMethodTypes["repos"]["getTopPaths"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getTopPaths"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Get the top 10 referrers over the last 14 days.
     */
    getTopReferrers: {
      (
        params?: RestEndpointMethodTypes["repos"]["getTopReferrers"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getTopReferrers"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the people who have push access to this branch.
     */
    getUsersWithAccessToProtectedBranch: {
      (
        params?: RestEndpointMethodTypes["repos"]["getUsersWithAccessToProtectedBranch"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["getUsersWithAccessToProtectedBranch"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     */
    getViews: {
      (
        params?: RestEndpointMethodTypes["repos"]["getViews"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["getViews"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     * @deprecated octokit.repos.list() has been renamed to octokit.repos.listForAuthenticatedUser() (2020-03-04)
     */
    list: {
      (
        params?: RestEndpointMethodTypes["repos"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["list"]["response"]>;

      endpoint: EndpointInterface;
    };

    listAssetsForRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["listAssetsForRelease"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listAssetsForRelease"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listBranches: {
      (
        params?: RestEndpointMethodTypes["repos"]["listBranches"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listBranches"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
     */
    listBranchesForHeadCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["listBranchesForHeadCommit"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listBranchesForHeadCommit"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     */
    listCollaborators: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCollaborators"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCollaborators"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Use the `:commit_sha` to specify the commit that will have its comments listed.
     */
    listCommentsForCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommentsForCommit"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCommentsForCommit"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Commit Comments use [these custom media types](https://developer.github.com/v3/repos/comments/#custom-media-types). You can read more about the use of media types in the API [here](https://developer.github.com/v3/media/).
     *
     * Comments are ordered by ascending ID.
     */
    listCommitComments: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommitComments"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listCommitComments"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value                    | Description                                                                                                                       |
     * | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
     * | `expired_key`            | The key that made the signature is expired.                                                                                       |
     * | `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
     * | `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
     * | `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
     * | `unsigned`               | The object does not include a signature.                                                                                          |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
     * | `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
     * | `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
     * | `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
     * | `malformed_signature`    | There was an error parsing the signature.                                                                                         |
     * | `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
     * | `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |
     */
    listCommits: {
      (
        params?: RestEndpointMethodTypes["repos"]["listCommits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listCommits"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
     *
     * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
     */
    listContributors: {
      (
        params?: RestEndpointMethodTypes["repos"]["listContributors"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listContributors"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listDeployKeys: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDeployKeys"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listDeployKeys"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with pull access can view deployment statuses for a deployment:
     */
    listDeploymentStatuses: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDeploymentStatuses"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listDeploymentStatuses"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Simple filtering of deployments is available via query parameters:
     */
    listDeployments: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDeployments"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listDeployments"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listDownloads: {
      (
        params?: RestEndpointMethodTypes["repos"]["listDownloads"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listDownloads"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists repositories for the specified organization.
     */
    listForOrg: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listForOrg"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists public repositories for the specified user.
     */
    listForUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForUser"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listForUser"]["response"]>;

      endpoint: EndpointInterface;
    };

    listForks: {
      (
        params?: RestEndpointMethodTypes["repos"]["listForks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listForks"]["response"]>;

      endpoint: EndpointInterface;
    };

    listHooks: {
      (
        params?: RestEndpointMethodTypes["repos"]["listHooks"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listHooks"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
     */
    listInvitations: {
      (
        params?: RestEndpointMethodTypes["repos"]["listInvitations"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listInvitations"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
     */
    listInvitationsForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["repos"]["listInvitationsForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listInvitationsForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
     */
    listLanguages: {
      (
        params?: RestEndpointMethodTypes["repos"]["listLanguages"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listLanguages"]["response"]>;

      endpoint: EndpointInterface;
    };

    listPagesBuilds: {
      (
        params?: RestEndpointMethodTypes["repos"]["listPagesBuilds"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listPagesBuilds"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    listProtectedBranchRequiredStatusChecksContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["listProtectedBranchRequiredStatusChecksContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listProtectedBranchRequiredStatusChecksContexts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all public repositories in the order that they were created.
     *
     * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of repositories.
     */
    listPublic: {
      (
        params?: RestEndpointMethodTypes["repos"]["listPublic"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listPublic"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all pull requests containing the provided commit SHA, which can be from any point in the commit history. The results will include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoint.
     */
    listPullRequestsAssociatedWithCommit: {
      (
        params?: RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listPullRequestsAssociatedWithCommit"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://developer.github.com/v3/repos/#list-tags).
     *
     * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
     */
    listReleases: {
      (
        params?: RestEndpointMethodTypes["repos"]["listReleases"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listReleases"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
     *
     * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
     */
    listStatusesForRef: {
      (
        params?: RestEndpointMethodTypes["repos"]["listStatusesForRef"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["listStatusesForRef"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    listTags: {
      (
        params?: RestEndpointMethodTypes["repos"]["listTags"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listTags"]["response"]>;

      endpoint: EndpointInterface;
    };

    listTeams: {
      (
        params?: RestEndpointMethodTypes["repos"]["listTeams"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listTeams"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.repos.listTopics() has been renamed to octokit.repos.getAllTopics() (2020-03-04)
     */
    listTopics: {
      (
        params?: RestEndpointMethodTypes["repos"]["listTopics"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["listTopics"]["response"]>;

      endpoint: EndpointInterface;
    };

    merge: {
      (
        params?: RestEndpointMethodTypes["repos"]["merge"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["merge"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.
     */
    pingHook: {
      (
        params?: RestEndpointMethodTypes["repos"]["pingHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["pingHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    removeBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeBranchProtection"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    removeCollaborator: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeCollaborator"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeCollaborator"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    removeDeployKey: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeDeployKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeDeployKey"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     */
    removeProtectedBranchAdminEnforcement: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchAdminEnforcement"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchAdminEnforcement"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    removeProtectedBranchAppRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchAppRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchAppRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    removeProtectedBranchPullRequestReviewEnforcement: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchPullRequestReviewEnforcement"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchPullRequestReviewEnforcement"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
     */
    removeProtectedBranchRequiredSignatures: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchRequiredSignatures"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchRequiredSignatures"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    removeProtectedBranchRequiredStatusChecks: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchRequiredStatusChecks"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchRequiredStatusChecks"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    removeProtectedBranchRequiredStatusChecksContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchRequiredStatusChecksContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchRequiredStatusChecksContexts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Disables the ability to restrict who can push to this branch.
     */
    removeProtectedBranchRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
     *
     * | Type    | Description                                                                                                                                         |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    removeProtectedBranchTeamRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchTeamRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchTeamRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a user to push to this branch.
     *
     * | Type    | Description                                                                                                                                   |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    removeProtectedBranchUserRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["removeProtectedBranchUserRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["removeProtectedBranchUserRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    replaceAllTopics: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceAllTopics"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["replaceAllTopics"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    replaceProtectedBranchAppRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceProtectedBranchAppRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["replaceProtectedBranchAppRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     */
    replaceProtectedBranchRequiredStatusChecksContexts: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceProtectedBranchRequiredStatusChecksContexts"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["replaceProtectedBranchRequiredStatusChecksContexts"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    replaceProtectedBranchTeamRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceProtectedBranchTeamRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["replaceProtectedBranchTeamRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     */
    replaceProtectedBranchUserRestrictions: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceProtectedBranchUserRestrictions"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["replaceProtectedBranchUserRestrictions"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * @deprecated octokit.repos.replaceTopics() has been renamed to octokit.repos.replaceAllTopics() (2020-03-04)
     */
    replaceTopics: {
      (
        params?: RestEndpointMethodTypes["repos"]["replaceTopics"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["replaceTopics"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
     *
     * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
     */
    requestPageBuild: {
      (
        params?: RestEndpointMethodTypes["repos"]["requestPageBuild"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["requestPageBuild"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE, README, and CONTRIBUTING files.
     */
    retrieveCommunityProfileMetrics: {
      (
        params?: RestEndpointMethodTypes["repos"]["retrieveCommunityProfileMetrics"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["retrieveCommunityProfileMetrics"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
     *
     * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
     */
    testPushHook: {
      (
        params?: RestEndpointMethodTypes["repos"]["testPushHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["testPushHook"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).
     */
    transfer: {
      (
        params?: RestEndpointMethodTypes["repos"]["transfer"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["transfer"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://developer.github.com/v3/repos/#replace-all-repository-topics) endpoint.
     */
    update: {
      (
        params?: RestEndpointMethodTypes["repos"]["update"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["update"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Protecting a branch requires admin or owner permissions to the repository.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * **Note**: The list of users, apps, and teams in total is limited to 100 items.
     */
    updateBranchProtection: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateBranchProtection"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateBranchProtection"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    updateCommitComment: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateCommitComment"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateCommitComment"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    updateHook: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateHook"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["updateHook"]["response"]>;

      endpoint: EndpointInterface;
    };

    updateInformationAboutPagesSite: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateInformationAboutPagesSite"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateInformationAboutPagesSite"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    updateInvitation: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateInvitation"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateInvitation"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     */
    updateProtectedBranchPullRequestReviewEnforcement: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateProtectedBranchPullRequestReviewEnforcement"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateProtectedBranchPullRequestReviewEnforcement"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
     */
    updateProtectedBranchRequiredStatusChecks: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateProtectedBranchRequiredStatusChecks"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateProtectedBranchRequiredStatusChecks"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access to the repository can edit a release.
     */
    updateRelease: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateRelease"]["parameters"]
      ): Promise<RestEndpointMethodTypes["repos"]["updateRelease"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Users with push access to the repository can edit a release asset.
     */
    updateReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["updateReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["updateReleaseAsset"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in the response of the [Create a release endpoint](https://developer.github.com/v3/repos/releases/#create-a-release) to upload a release asset.
     *
     * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
     *
     * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
     *
     * `application/zip`
     *
     * GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.
     *
     * **Notes:**
     *
     * *   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://developer.github.com/v3/repos/releases/#list-assets-for-a-release)" endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://github.com/contact).
     * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
     *
     * This may leave an empty asset with a state of `starter`. It can be safely deleted.
     */
    uploadReleaseAsset: {
      (
        params?: RestEndpointMethodTypes["repos"]["uploadReleaseAsset"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["repos"]["uploadReleaseAsset"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
  search: {
    /**
     * Find file contents via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * **Note:** You must [authenticate](https://developer.github.com/v3/#authentication) to search for code across all public repositories.
     *
     * **Considerations for code search**
     *
     * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
     *
     * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
     * *   Only files smaller than 384 KB are searchable.
     * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
     *
     * Suppose you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery). Your query would look something like this:
     *
     * Here, we're searching for the keyword `addClass` within a file's contents. We're making sure that we're only looking in files where the language is JavaScript. And we're scoping the search to the `repo:jquery/jquery` repository.
     */
    code: {
      (
        params?: RestEndpointMethodTypes["search"]["code"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["code"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Find commits via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * **Considerations for commit search**
     *
     * Only the _default branch_ is considered. In most cases, this will be the `master` branch.
     *
     * Suppose you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
     */
    commits: {
      (
        params?: RestEndpointMethodTypes["search"]["commits"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["commits"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * Let's say you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
     *
     * In this query, we're searching for the keyword `windows`, within any open issue that's labeled as `bug`. The search runs across repositories whose primary language is Python. We’re sorting by creation date in ascending order, so that the oldest issues appear first in the search results.
     */
    issuesAndPullRequests: {
      (
        params?: RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["search"]["issuesAndPullRequests"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * Suppose you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
     *
     * The labels that best match for the query appear first in the search results.
     */
    labels: {
      (
        params?: RestEndpointMethodTypes["search"]["labels"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["labels"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Find repositories via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * Suppose you want to search for popular Tetris repositories written in Assembly. Your query might look like this.
     *
     * You can search for multiple topics by adding more `topic:` instances, and including the `mercy-preview` header. For example:
     *
     * In this request, we're searching for repositories with the word `tetris` in the name, the description, or the README. We're limiting the results to only find repositories where the primary language is Assembly. We're sorting by stars in descending order, so that the most popular repositories appear first in the search results.
     */
    repos: {
      (
        params?: RestEndpointMethodTypes["search"]["repos"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["repos"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.
     *
     * Suppose you want to search for topics related to Ruby that are featured on [https://github.com/topics](https://github.com/topics). Your query might look like this:
     *
     * In this request, we're searching for topics with the keyword `ruby`, and we're limiting the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
     *
     * **Note:** A search for featured Ruby topics only has 6 total results, so a [Link header](https://developer.github.com/v3/#link-header) indicating pagination is not included in the response.
     */
    topics: {
      (
        params?: RestEndpointMethodTypes["search"]["topics"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["topics"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Find users via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).
     *
     * When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).
     *
     * Imagine you're looking for a list of popular users. You might try out this query:
     *
     * Here, we're looking at users with the name Tom. We're only interested in those with more than 42 repositories, and only if they have over 1,000 followers.
     */
    users: {
      (
        params?: RestEndpointMethodTypes["search"]["users"]["parameters"]
      ): Promise<RestEndpointMethodTypes["search"]["users"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  teams: {
    /**
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/:org_id/team/:team_id/memberships/:username`.
     */
    addOrUpdateMembershipInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["addOrUpdateMembershipInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["addOrUpdateMembershipInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/:org_id/team/:team_id/projects/:project_id`.
     */
    addOrUpdateProjectInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["addOrUpdateProjectInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["addOrUpdateProjectInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/:org_id/team/:team_id/repos/:owner/:repo`.
     *
     * For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)" in the GitHub Help documentation.
     */
    addOrUpdateRepoInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["addOrUpdateRepoInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["addOrUpdateRepoInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/repos/:owner/:repo`.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
     */
    checkManagesRepoInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["checkManagesRepoInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["checkManagesRepoInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * To create a team, the authenticated user must be a member or owner of `:org`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
     *
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)" in the GitHub Help documentation.
     */
    create: {
      (
        params?: RestEndpointMethodTypes["teams"]["create"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["create"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments`.
     */
    createDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["createDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["createDiscussionCommentInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions`.
     */
    createDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["createDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["createDiscussionInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number`.
     */
    deleteDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["deleteDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["deleteDiscussionCommentInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number`.
     */
    deleteDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["deleteDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["deleteDiscussionInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id`.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     */
    deleteInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["deleteInOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["deleteInOrg"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id`.
     */
    getByName: {
      (
        params?: RestEndpointMethodTypes["teams"]["getByName"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["getByName"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number`.
     */
    getDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["getDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["getDiscussionCommentInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number`.
     */
    getDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["getDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["getDiscussionInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/memberships/:username`.
     *
     * **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create team](https://developer.github.com/v3/teams#create-team).
     */
    getMembershipInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["getMembershipInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["getMembershipInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all teams in an organization that are visible to the authenticated user.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["teams"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["list"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the child teams of the team requested by `:team_slug`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/teams`.
     */
    listChildInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listChildInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listChildInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments`.
     */
    listDiscussionCommentsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listDiscussionCommentsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listDiscussionCommentsInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions`.
     */
    listDiscussionsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listDiscussionsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listDiscussionsInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://developer.github.com/apps/building-oauth-apps/).
     */
    listForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["teams"]["listForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Team members will include the members of child teams.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     */
    listMembersInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listMembersInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listMembersInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/invitations`.
     */
    listPendingInvitationsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listPendingInvitationsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listPendingInvitationsInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the organization projects for a team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/projects`.
     */
    listProjectsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listProjectsInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listProjectsInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists a team's repositories visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/repos`.
     */
    listReposInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listReposInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["listReposInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id/memberships/:username`.
     */
    removeMembershipInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["removeMembershipInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["removeMembershipInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id/projects/:project_id`.
     */
    removeProjectInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["removeProjectInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["removeProjectInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id/repos/:owner/:repo`.
     */
    removeRepoInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["removeRepoInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["removeRepoInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/projects/:project_id`.
     */
    reviewProjectInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["reviewProjectInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["reviewProjectInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number`.
     */
    updateDiscussionCommentInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["updateDiscussionCommentInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["updateDiscussionCommentInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/:org_id/team/:team_id/discussions/:discussion_number`.
     */
    updateDiscussionInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["updateDiscussionInOrg"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["teams"]["updateDiscussionInOrg"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/:org_id/team/:team_id`.
     */
    updateInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["updateInOrg"]["parameters"]
      ): Promise<RestEndpointMethodTypes["teams"]["updateInOrg"]["response"]>;

      endpoint: EndpointInterface;
    };
  };
  users: {
    /**
     * This endpoint is accessible with the `user` scope.
     */
    addEmails: {
      (
        params?: RestEndpointMethodTypes["users"]["addEmails"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["addEmails"]["response"]>;

      endpoint: EndpointInterface;
    };

    block: {
      (
        params?: RestEndpointMethodTypes["users"]["block"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["block"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * If the user is blocked:
     *
     * If the user is not blocked:
     */
    checkBlocked: {
      (
        params?: RestEndpointMethodTypes["users"]["checkBlocked"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["checkBlocked"]["response"]>;

      endpoint: EndpointInterface;
    };

    checkFollowing: {
      (
        params?: RestEndpointMethodTypes["users"]["checkFollowing"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["checkFollowing"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    checkFollowingForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["checkFollowingForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["checkFollowingForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    createGpgKey: {
      (
        params?: RestEndpointMethodTypes["users"]["createGpgKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["createGpgKey"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    createPublicKey: {
      (
        params?: RestEndpointMethodTypes["users"]["createPublicKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["createPublicKey"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * This endpoint is accessible with the `user` scope.
     */
    deleteEmails: {
      (
        params?: RestEndpointMethodTypes["users"]["deleteEmails"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["deleteEmails"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deleteGpgKey: {
      (
        params?: RestEndpointMethodTypes["users"]["deleteGpgKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["deleteGpgKey"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    deletePublicKey: {
      (
        params?: RestEndpointMethodTypes["users"]["deletePublicKey"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["deletePublicKey"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."
     *
     * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     */
    follow: {
      (
        params?: RestEndpointMethodTypes["users"]["follow"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["follow"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists public and private profile information when authenticated through basic auth or OAuth with the `user` scope.
     *
     * Lists public profile information when authenticated through OAuth without the `user` scope.
     */
    getAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["getAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["getAuthenticated"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Provides publicly available information about someone with a GitHub account.
     *
     * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see "[Response with GitHub plan information](https://developer.github.com/v3/users/#response-with-github-plan-information)."
     *
     * The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://developer.github.com/v3/#authentication).
     *
     * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://developer.github.com/v3/users/emails/)".
     */
    getByUsername: {
      (
        params?: RestEndpointMethodTypes["users"]["getByUsername"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["getByUsername"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
     *
     * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
     */
    getContextForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["getContextForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["getContextForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    getGpgKey: {
      (
        params?: RestEndpointMethodTypes["users"]["getGpgKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["getGpgKey"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    getPublicKey: {
      (
        params?: RestEndpointMethodTypes["users"]["getPublicKey"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["getPublicKey"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
     *
     * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of users.
     */
    list: {
      (
        params?: RestEndpointMethodTypes["users"]["list"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["list"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * List the users you've blocked on your personal account.
     */
    listBlocked: {
      (
        params?: RestEndpointMethodTypes["users"]["listBlocked"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["listBlocked"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
     */
    listEmails: {
      (
        params?: RestEndpointMethodTypes["users"]["listEmails"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["listEmails"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people who the authenticated user follows.
     */
    listFollowedByAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowedByAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowedByAuthenticated"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people following the authenticated user.
     */
    listFollowersForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowersForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowersForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people following the specified user.
     */
    listFollowersForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowersForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowersForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people who the authenticated user follows.
     * @deprecated octokit.users.listFollowingForAuthenticatedUser() has been renamed to octokit.users.listFollowedByAuthenticated() (2020-03-04)
     */
    listFollowingForAuthenticatedUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowingForAuthenticatedUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowingForAuthenticatedUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the people who the specified user follows.
     */
    listFollowingForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listFollowingForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listFollowingForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    listGpgKeys: {
      (
        params?: RestEndpointMethodTypes["users"]["listGpgKeys"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["listGpgKeys"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the GPG keys for a user. This information is accessible by anyone.
     */
    listGpgKeysForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listGpgKeysForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listGpgKeysForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists your publicly visible email address, which you can set with the [Toggle primary email visibility](https://developer.github.com/v3/users/emails/#toggle-primary-email-visibility) endpoint. This endpoint is accessible with the `user:email` scope.
     */
    listPublicEmails: {
      (
        params?: RestEndpointMethodTypes["users"]["listPublicEmails"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listPublicEmails"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    listPublicKeys: {
      (
        params?: RestEndpointMethodTypes["users"]["listPublicKeys"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listPublicKeys"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
     */
    listPublicKeysForUser: {
      (
        params?: RestEndpointMethodTypes["users"]["listPublicKeysForUser"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["listPublicKeysForUser"]["response"]
      >;

      endpoint: EndpointInterface;
    };
    /**
     * Sets the visibility for your primary email addresses.
     */
    togglePrimaryEmailVisibility: {
      (
        params?: RestEndpointMethodTypes["users"]["togglePrimaryEmailVisibility"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["togglePrimaryEmailVisibility"]["response"]
      >;

      endpoint: EndpointInterface;
    };

    unblock: {
      (
        params?: RestEndpointMethodTypes["users"]["unblock"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["unblock"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     */
    unfollow: {
      (
        params?: RestEndpointMethodTypes["users"]["unfollow"]["parameters"]
      ): Promise<RestEndpointMethodTypes["users"]["unfollow"]["response"]>;

      endpoint: EndpointInterface;
    };
    /**
     * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
     */
    updateAuthenticated: {
      (
        params?: RestEndpointMethodTypes["users"]["updateAuthenticated"]["parameters"]
      ): Promise<
        RestEndpointMethodTypes["users"]["updateAuthenticated"]["response"]
      >;

      endpoint: EndpointInterface;
    };
  };
};
