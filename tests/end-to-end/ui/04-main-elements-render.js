import mainContent from '../../pageobjects/main-content.page';
import sideNav from '../../pageobjects/side-nav.page';

// test data imports
import { checkIfUserIsValid } from '../../data/checks';
import { username, email, password } from '../../data/user.js';

describe('[Main Elements Render]', function() {
	before(() => {
		checkIfUserIsValid(username, email, password);
		sideNav.sidebarHeader.waitForVisible(10000);
		sideNav.spotlightSearchIcon.click();
		sideNav.spotlightSearch.waitForVisible(10000);
		sideNav.searchChannel('general');
	});

	describe('[Side Nav Bar]', () => {
		describe('render:', () => {
			before(() => {
				sideNav.sidebarHeader.waitForVisible(10000);
			});
		});

		describe('spotlight search render:', () => {
			after(() => {
				mainContent.messageInput.click();
			});
			it('it should show spotlight search bar', () => {
				sideNav.spotlightSearchIcon.click();
				sideNav.spotlightSearch.isVisible().should.be.true;
			});

			it('it should click the spotlight and show the channel list', () => {
				sideNav.spotlightSearch.waitForVisible(5000);
				sideNav.spotlightSearch.click();
				sideNav.spotlightSearchPopUp.waitForVisible(5000);
				sideNav.spotlightSearchPopUp.isVisible().should.be.true;
			});
		});
	});
});

