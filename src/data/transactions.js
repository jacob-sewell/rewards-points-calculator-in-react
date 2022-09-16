import mocker from 'mocker-data-generator';

export function fetchCustomerNames(options) {
    const limit = options?.limit || 100;
    return mocker()
        .schema(
            'customers',
            {
                name: {
                    faker: 'company.companyName'
                }
            },
            limit
        )
        .build()
        // .then((data) => {
        //    console.table(data.customers);
        //    return data;
        // })
        .catch((e) => {
            console.error(e);
            return { customers: [] };
        });

};

export function fetchRecentTransactions(options) {
    const limit = options?.limit || 1000;
    return fetchCustomerNames({ limit: Math.ceil(limit / 2) })
        .then(({ customers }) => mocker()
            .schema(
                'transactions',
                {
                    customer: {
                        values: customers.map(({ name }) => name)
                    },
                    amount: {
                        faker: 'datatype.float({ "min": 1, "max": 5000, "precision": 0.01 })'
                    },
                    date: {
                        faker: 'date.past(0.25)'
                    }
                },
                limit
            )
            .build()
            // .then((data) => {
            //     console.table(data.transactions);
            //     return data;
            // })
            .catch((e) => {
                console.error(e);
                return { transactions: [] };
            })
    );
};
