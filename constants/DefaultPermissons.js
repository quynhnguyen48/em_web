export const DEFAULT_PERMISSIONS = {
  "api::about": {
    controllers: {
      about: {
        find: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::banner": {
    controllers: {
      banner: {
        find: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::blog": {
    controllers: {
      blog: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::blog-category": {
    controllers: {
      "blog-category": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::booking": {
    controllers: {
      booking: {
        count: {
          enabled: true,
          policy: "",
        },
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::brand": {
    controllers: {
      brand: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::card-owner-invitation": {
    controllers: {
      "card-owner-invitation": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::check-in": {
    controllers: {
      "check-in": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
        updatePersonAliasID: {
          enabled: false,
          policy: "",
        },
        hanetAIWebhook: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::import-export-history": {
    controllers: {
      "import-export-history": {
        find: {
          enabled: false,
          policy: "",
        },
        findOne: {
          enabled: false,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::debt-collection-reminder": {
    controllers: {
      "debt-collection-reminder": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::membership-card": {
    controllers: {
      "membership-card": {
        getServiceCardAnalytics: {
          enabled: false,
          policy: "",
        },
        addMemberToCard: {
          enabled: true,
          policy: "",
        },
        removeMemberFromCard: {
          enabled: true,
          policy: "",
        },
        leaveCard: {
          enabled: true,
          policy: "",
        },
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::notification": {
    controllers: {
      notification: {
        readAll: {
          enabled: true,
          policy: "",
        },
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::order": {
    controllers: {
      order: {
        count: {
          enabled: true,
          policy: "",
        },
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::privacy": {
    controllers: {
      privacy: {
        find: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::product": {
    controllers: {
      product: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::product-category": {
    controllers: {
      "product-category": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::product-inventory-history": {
    controllers: {
      "product-inventory-history": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::review": {
    controllers: {
      review: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::setting": {
    controllers: {
      setting: {
        find: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::term": {
    controllers: {
      term: {
        find: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::transaction": {
    controllers: {
      transaction: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
        getTotalRevenue: {
          enabled: true,
          policy: "",
        },
        getUserAnalytics: {
          enabled: true,
          policy: "",
        },
        getMonthlyRevenue: {
          enabled: true,
          policy: "",
        },
        getYearlyRevenue: {
          enabled: true,
          policy: "",
        },
        getTotalDebt: {
          enabled: true,
          policy: "",
        },
        getTopDebt: {
          enabled: true,
          policy: "",
        },
        getDebtDistribution: {
          enabled: true,
          policy: "",
        },
        getUserDebt: {
          enabled: true,
          policy: "",
        },
        getCustomerAnalytics: {
          enabled: true,
          policy: "",
        },
        getStaffAnalytics: {
          enabled: true,
          policy: "",
        },
        getProductAnalytics: {
          enabled: true,
          policy: "",
        },
        getSuggestionServices: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::treatment": {
    controllers: {
      treatment: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::treatment-category": {
    controllers: {
      "treatment-category": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: true,
          policy: "",
        },
        delete: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "api::treatment-history": {
    controllers: {
      "treatment-history": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        create: {
          enabled: false,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        delete: {
          enabled: false,
          policy: "",
        },
        getInProgress: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "plugin::content-type-builder": {
    controllers: {
      components: {
        getComponents: {
          enabled: true,
          policy: "",
        },
        getComponent: {
          enabled: true,
          policy: "",
        },
      },
      "content-types": {
        getContentTypes: {
          enabled: true,
          policy: "",
        },
        getContentType: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "plugin::email": {
    controllers: {
      email: {
        send: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "plugin::upload": {
    controllers: {
      "content-api": {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        destroy: {
          enabled: false,
          policy: "",
        },
        upload: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "plugin::i18n": {
    controllers: {
      locales: {
        listLocales: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
  "plugin::users-permissions": {
    controllers: {
      auth: {
        callback: {
          enabled: true,
          policy: "",
        },
        resetPassword: {
          enabled: true,
          policy: "",
        },
        connect: {
          enabled: true,
          policy: "",
        },
        forgotPassword: {
          enabled: true,
          policy: "",
        },
        register: {
          enabled: true,
          policy: "",
        },
        emailConfirmation: {
          enabled: true,
          policy: "",
        },
        sendEmailConfirmation: {
          enabled: true,
          policy: "",
        },
      },
      user: {
        create: {
          enabled: true,
          policy: "",
        },
        update: {
          enabled: false,
          policy: "",
        },
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        count: {
          enabled: true,
          policy: "",
        },
        destroy: {
          enabled: false,
          policy: "",
        },
        me: {
          enabled: true,
          policy: "",
        },
        forgotPassword: {
          enabled: true,
          policy: "",
        },
        resetPassword: {
          enabled: true,
          policy: "",
        },
      },
      role: {
        createRole: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
        find: {
          enabled: true,
          policy: "",
        },
        updateRole: {
          enabled: true,
          policy: "",
        },
        deleteRole: {
          enabled: true,
          policy: "",
        },
      },
      permissions: {
        getPermissions: {
          enabled: false,
          policy: "",
        },
      },
    },
  },
  "api::reports": {
    controllers: {
      reports: {
        find: {
          enabled: true,
          policy: "",
        },
        findOne: {
          enabled: true,
          policy: "",
        },
      },
    },
  },
}
