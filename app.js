Ext.define('MyApp2.view.Main', {
	extend: 'Ext.grid.Grid',
	title: 'Reykjavik Flight Arrivals',
	itemConfig: {
		viewModel: true
	},
	columns: [{
		text: 'Date',
		// xtype: 'datecolumn',
		// dataIndex: 'date',
		cell: {
			bind: '{record.date:date("F j")}'
		}
	}, {
		text: 'Airline',
		width: 120,
		cell: {
			bind: '{record.airline}'
		}
	}, {
		text: 'From',
		cell: {
			bind: '{record.to}'
		},
		width: 160
	}, {
		text: 'Scheduled',
		cell: {
			bind: '{record.plannedDeparture}'
		},
		align: 'center'
	}],
	 
	store: {
		type: 'store',
		autoLoad: true,
		fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
		proxy: {
			type: 'ajax',
			url: 'departures.json',
			reader: {rootProperty: 'results'}
		}
	}
	});
Ext.application({
	extend: 'MyApp2.Application',
	name: 'MyApp2',
	mainView: 'MyApp2.view.Main',
launch: function() {
    var css = Ext.util.CSS.createStyleSheet();
    Ext.util.CSS.createRule(css, '.x-red', 'color:red !important;');
    Ext.util.CSS.createRule(css, '.x-green', 'color:green !important;');
    Ext.util.CSS.createRule(css, '.x-blue', 'color:blue !important;');
 
}
});

