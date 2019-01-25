import sideNav from '../../pageobjects/side-nav.page';

// test data imports
import { checkIfUserIsValid } from '../../data/checks';
import { username, email, password } from '../../data/user.js';

describe('[Main Elements Render]', function() {
	before(() => {
		checkIfUserIsValid(username, email, password);
		sideNav.sidebarHeader.waitForVisible(10000);
	});

	describe('[Side Nav Bar]', () => {
		describe('render:', () => {
			before(() => {
				sideNav.sidebarHeader.waitForVisible(10000);
			});
		});

		describe('emoji render:', () => {
			it('it should show emoji bar', () => {
				sideNav.spotlightEmotionIcon.click();
				sideNav.dropDownMenu.waitForVisible(50000);
				sideNav.dropDownMenu.isVisible().should.be.true;
			});
			it('it should show emoji bar', () => {
				sideNav.dropDownMenuEmotion.click();
			});
		});
	});
});
