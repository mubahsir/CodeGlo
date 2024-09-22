import React from "react";
import Navbar from "../component/navbar";
import Gettoknow from "../component/gettoknow";
import Footer from "../component/footer";
function Web() {
  const gettoknow = {
    head: "Let's work together to build something great.",
    para: " ",
  };
  return (
    <>
      <Navbar />
      {/* __________________________________________

Web Technology
__________________________________________ */}
      <div className="digital1 bg-black">
        <div className="digitalhead">
          <h1 className="RobotoMono ">JTechnology & Skill Set</h1>
        </div>

        <div className="ourwork">
          <h1 id="ourworkhead" className=" ">
            Our work has been featured in
          </h1>
          <div className="portfolio1img">
            <img src="fox_news_channel_logo.svg" alt="" />
            <img src="lifehacker.svg" alt="" />
            <img src="medium-seeklogo.com.svg" alt="" />
            <img src="nbc_logo.svg" alt="" />
            <img src="product-hunt-logo-vertical-black.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Web Technology</h1>
          <div className="tech-tags">
            <div className="tech-tag">Cloud Application Development</div>
            <div className="tech-tag">Web Application Development</div>
            <div className="tech-tag">Mobile API development</div>
            <div className="tech-tag">Website Development</div>
            <div className="tech-tags">
              <div className="tech-tag">CMS Development</div>
              <div className="tech-tag">Payment Gateway Integrations</div>
              <div className="tech-tag">Messaging System Integration</div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/nodejs.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/angular.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/php.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/java.webp" width="50" />
            <img alt="AWeber logo" height="50" src="rails.webp" width="50" />
          </div>

          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/python1new.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/mongodb.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/mysql.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/html5.webp" width="50" />
            <img
              alt="AWeber logo"
              height="50"
              src="badge-css.webp"
              width="50"
            />
          </div>

          <div className="tech-expertise">
            <img alt="HubSpot logo" height="50" src="/joomla.webp" width="50" />
            <img
              alt="AWeber logo"
              height="50"
              src="/wordpress.webp"
              width="50"
            />
            <img alt="AWeber logo" height="50" src="react.webp" width="50" />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Node.JS</p>
            </div>
            <div className="tech-button">
              <p>Angular JS</p>
            </div>
            <div className="tech-button">
              <p>Express JS</p>
            </div>
            <div className="tech-button">
              <p>Hapi JS</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Strapi.JS</p>
            </div>
            <div className="tech-button">
              <p>PHP</p>
            </div>
            <div className="tech-button">
              <p>CodeIgniter</p>
            </div>
            <div className="tech-button">
              <p>Laravel</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Android Native App Development
__________________________________________ */}

      <div className="tech-bg-main-1">
        <div className="tech-point">
          <h1 className="RobotoMono ">iOS Native App Development</h1>
          <div className="tech-tags">
            <div className="tech-tag">IDE</div>
            <div className="tech-tag">Social Media SDK Integrations</div>
            <div className="tech-tag">Data Binding / Dependency Injection</div>
            <div className="tech-tags"></div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/ios.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/swift.webp"
              width="30"
            />
            <img
              alt="HubSpot logo"
              height="50"
              src="/vertical.webp"
              width="50"
            />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Xcode</p>
            </div>
            <div className="tech-button">
              <p>Swift</p>
            </div>
            <div className="tech-button">
              <p>JSON cafe</p>
            </div>
            <div className="tech-button">
              <p>CryptoSwift</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>CoreData</p>
            </div>
            <div className="tech-button">
              <p>RealmSwift</p>
            </div>
            <div className="tech-button">
              <p>FireBase</p>
            </div>
            <div className="tech-button">
              <p>MVC</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Android Native App Development
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Android Native App Development</h1>
          <div className="tech-tags">
            <div className="tech-tag">IDE</div>
            <div className="tech-tag">Social Media SDK Integrations</div>
            <div className="tech-tag">Cloud Messaging</div>
            <div className="tech-tag">Map Kit</div>
            <div className="tech-tags">
              <div className="tech-tag">Encryption / Decryption Method</div>
              <div className="tech-tag">Payment Gateway Integrations</div>
            </div>
          </div>
          {/* <div className="tech-tag">
     Marketing Automation
    </div>
    <div className="tech-tag">
     Affiliate Marketing
    </div>
    <div className="tech-tag">
     Influencer Marketing
    </div>
    </div>
   </div> */}
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/android.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/kotlin.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/dagger.webp" width="50" />
            <img
              alt="AWeber logo"
              height="50"
              src="/vertical.webp"
              width="50"
            />
            <img alt="AWeber logo" height="50" src="/maps.webp" width="50" />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Android Studio</p>
            </div>
            <div className="tech-button">
              <p>Kotlin</p>
            </div>
            <div className="tech-button">
              <p>Java - Core</p>
            </div>
            <div className="tech-button">
              <p>XML</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Room DB</p>
            </div>
            <div className="tech-button">
              <p>Shared Preferences</p>
            </div>
            <div className="tech-button">
              <p>Sqlite</p>
            </div>
            <div className="tech-button">
              <p>Google Material Design</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Hybrid Mobile App Development
__________________________________________ */}

      <div className="tech-bg-main-1">
        <div className="tech-point">
          <h1 className="RobotoMono ">Hybrid Mobile App Development</h1>
        </div>

        <div className="tech-expertise">
          <img
            alt="Google Analytics logo"
            height="50"
            src="/phonrgap.webp"
            width="50"
          />
          <img
            alt="Google Analytics logo"
            height="50"
            src="/ionic.webp"
            width="30"
          />
          <img alt="HubSpot logo" height="50" src="/vue.webp" width="50" />
          <img alt="AWeber logo" height="50" src="/react.webp" width="50" />
        </div>
      </div>

      {/* __________________________________________

Blockchain Development 
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Blockchain Development</h1>
        </div>

        <div className="tech-expertise">
          <img
            alt="Google Analytics logo"
            height="50"
            src="/python1new.webp"
            width="50"
          />
          <img
            alt="Google Analytics logo"
            height="50"
            src="/cnew123.webp"
            width="30"
          />
          <img alt="HubSpot logo" height="50" src="/java.webp" width="50" />
          <img alt="AWeber logo" height="50" src="/jsnew01.webp" width="50" />
        </div>
      </div>

      {/* __________________________________________

Technoligy 
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Digital Marketing</h1>
          <div className="tech-tags">
            <div className="tech-tag">Search Engine Optimization</div>
            <div className="tech-tag">Pay Per Click</div>
            <div className="tech-tag">
              Social Media Paid and Organic Marketing
            </div>
            <div className="tech-tag">Content Marketing</div>
            <div className="tech-tags">
              <div className="tech-tag">E commerce Marketing</div>
              <div className="tech-tag">Email Marketing</div>
              <div className="tech-tag">Marketing Automation</div>
              <div className="tech-tag">Affiliate Marketing</div>
              <div className="tech-tag">Influencer Marketing</div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/google_ads.svg"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/google_analytics.svg"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/hubspot.svg" width="50" />
            <img alt="AWeber logo" height="50" src="/zapier.svg" width="50" />
            <img
              alt="AWeber logo"
              height="50"
              src="/aweber (1).svg"
              width="50"
            />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Google Analytics</p>
            </div>
            <div className="tech-button">
              <p>Google Search Console</p>
            </div>
            <div className="tech-button">
              <p>Google Ads</p>
            </div>
            <div className="tech-button">
              <p>Microsoft Ads</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Facebook ads</p>
            </div>
            <div className="tech-button">
              <p>Instagram ads</p>
            </div>
            <div className="tech-button">
              <p>Taboola ads</p>
            </div>
            <div className="tech-button">
              <p>Quora ads</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Salesforce Development
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Salesforce Development</h1>
          <div className="tech-tags">
            <div className="tech-tag">Data Modeling Management & Security</div>
            <div className="tech-tag">Platform Development</div>
            <div className="tech-tag">Salesforce App Customization</div>
            <div className="tech-tag">Visualforce Basics</div>
            <div className="tech-tags">
              <div className="tech-tag">Search Solutions Basics</div>
              <div className="tech-tag">Developer Console</div>
              <div className="tech-tag">Salesforce Object Query Language</div>
              <div className="tech-tag">Apex Object-Oriented Programming</div>
              <div className="tech-tag">Influencer Marketing</div>
              <div className="tech-tags">
                <div className="tech-tag">Lightning Framework</div>
              </div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              className="expries-1-1"
              alt="Google Analytics logo"
              height="50"
              src="/salesforce.webp"
              width=""
            />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Eclipse IDE</p>
            </div>
            <div className="tech-button">
              <p>Apex Data Loader</p>
            </div>
            <div className="tech-button">
              <p>SF Excel connector</p>
            </div>
            <div className="tech-button">
              <p>Apex Data Loader</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Data Import Wizard</p>
            </div>
            <div className="tech-button">
              <p>VisualForce</p>
            </div>
            <div className="tech-button">
              <p>Static Resources</p>
            </div>
            <div className="tech-button">
              <p>HTML</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Quality Assurance
__________________________________________ */}

      <div className="tech-bg-main-1">
        <div className="tech-point">
          <h1 className="RobotoMono ">Quality Assurance</h1>
          <div className="tech-tags">
            <div className="tech-tag">Automation Testing</div>
            <div className="tech-tag">API Testing</div>
            <div className="tech-tag">Performance Testing</div>
            <div className="tech-tag">Responsive and Compatibility Testing</div>
            <div className="tech-tags">
              <div className="tech-tag">Bug Tracking</div>
              <div className="tech-tag">
                Meta Description and Title Validation
              </div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/selenium.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/apache.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/jira.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/mantis.webp" width="50" />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Selenium with Java</p>
            </div>
            <div className="tech-button">
              <p>Test NG</p>
            </div>
            <div className="tech-button">
              <p>Jenkins</p>
            </div>
            <div className="tech-button">
              <p>Webdrivers</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Ghostinspector</p>
            </div>
            <div className="tech-button">
              <p>Advanced REST client</p>
            </div>
            <div className="tech-button">
              <p>Selenium With Reset API</p>
            </div>
            <div className="tech-button">
              <p>Postman</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

DevOps/CloudOps 
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">DevOps/CloudOps</h1>
          <div className="tech-tags">
            <div className="tech-tag">SCM Tools</div>
            <div className="tech-tag">CI/CD Integrations</div>
            <div className="tech-tag">Web Servers</div>
            <div className="tech-tag">Scripting Languages</div>
            <div className="tech-tag">Configuration Management</div>
            <div className="tech-tag">Containerization Tool</div>
            <div className="tech-tag">Cloud Platform Support</div>
            <div className="tech-tags">
              <div className="tech-tag">Deployment Tool</div>
              <div className="tech-tag">Monitoring Tools</div>
              <div className="tech-tag">Code Quality Analysis Tool</div>
              <div className="tech-tag">Security Check</div>
              <div className="tech-tag">Security & CDN Tools</div>
              <div className="tech-tag">Mail Servers</div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/aws-skilset.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/google-cloud.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/azure.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/jenkins.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/docker.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/heroku.webp" width="50" />
            <img
              alt="AWeber logo"
              height="50"
              src="/skilset-sonar.webp"
              width="50"
            />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Bitbucket</p>
            </div>
            <div className="tech-button">
              <p>Gitlab</p>
            </div>
            <div className="tech-button">
              <p>Jenkins</p>
            </div>
            <div className="tech-button">
              <p>Bamboo</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>VSTS</p>
            </div>
            <div className="tech-button">
              <p>Apache Tomcat</p>
            </div>
            <div className="tech-button">
              <p>Apache Web Server</p>
            </div>
            <div className="tech-button">
              <p>IBM HTTP</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

InfoSec
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">InfoSec</h1>
          <div className="tech-tags">
            <div className="tech-tag">Anti-malware software</div>
            <div className="tech-tag">Anomaly detection</div>
            <div className="tech-tag">Application security</div>
            <div className="tech-tag">Data loss prevent (DLP)</div>
            <div className="tech-tag">Email security</div>
            <div className="tech-tag">Endpoint security</div>
            <div className="tech-tag">Firewall</div>
            <div className="tech-tags">
              <div className="tech-tag">Intrusion prevention systems</div>
              <div className="tech-tag">
                Security information and event management (SIEM)
              </div>
              <div className="tech-tag">Virtual private network (VPN)</div>
              <div className="tech-tag">Web Appplication Firewall</div>
              <div className="tech-tag">Wireless security</div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/burp-suite.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/br.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/Sophos.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/sucuri.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/cf.webp" width="50" />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Bitdefender Antivirus</p>
            </div>
            <div className="tech-button">
              <p>Avira</p>
            </div>
            <div className="tech-button">
              <p>AVG AntiVirus</p>
            </div>
            <div className="tech-button">
              <p>SpyBot</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Quick Heal</p>
            </div>
            <div className="tech-button">
              <p>AVORA</p>
            </div>
            <div className="tech-button">
              <p>Splunk Enterprise</p>
            </div>
            <div className="tech-button">
              <p>Elastic X-Pack</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Design
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Design</h1>
          <div className="tech-tags">
            <div className="tech-tag">Mobile App Designs</div>
            <div className="tech-tag">Web Designs</div>
            <div className="tech-tag">Branding</div>
            <div className="tech-tag">Ad Designs</div>
            <div className="tech-tag">Email Designs</div>

            <div className="tech-tags">
              <div className="tech-tag">Corporate Kit Designs</div>
              <div className="tech-tag">Presentation Templates</div>
              <div className="tech-tag">Brainstorming and Prototyping</div>
              <div className="tech-tag">User Experience Design Planning</div>
            </div>
          </div>
          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/sketch.webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/invision.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/ae.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/fixma.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/xd.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/lucid.webp" width="50" />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>Sketch</p>
            </div>
            <div className="tech-button">
              <p>Figma</p>
            </div>
            <div className="tech-button">
              <p>Adobe Illustrator</p>
            </div>
            <div className="tech-button">
              <p>Adobe XD</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>InVision</p>
            </div>
            <div className="tech-button">
              <p>Adobe Photoshop</p>
            </div>
            <div className="tech-button">
              <p>Adobe After Effects</p>
            </div>
            <div className="tech-button">
              <p>Affinity designer</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>

      {/* __________________________________________

Project Management
__________________________________________ */}

      <div className="tech-bg-main">
        <div className="tech-point">
          <h1 className="RobotoMono ">Project Management</h1>
          <div className="tech-tags">
            <div className="tech-tag">Leadership</div>
            <div className="tech-tag">Delegating Work</div>
            <div className="tech-tag">Scheduling Work</div>
            <div className="tech-tag">Cost Control</div>
            <div className="tech-tag">Agile/Scrum Management</div>

            <div className="tech-tags">
              <div className="tech-tag">Risk Management</div>
              <div className="tech-tag">Critical Thinking</div>
              <div className="tech-tag">Communication</div>
              <div className="tech-tag">Project Recovery</div>
              <div className="tech-tag">Team Coaching</div>
              <div className="tech-tag">Team Management</div>
            </div>
          </div>

          <div className="tech-tags">
            <div className="tech-tag">Task Management</div>
            <div className="tech-tag">Quality Management</div>
            <div className="tech-tag">Meeting Management</div>
          </div>

          <h2 className="tech-h2">Technology Expertise</h2>
          <div className="tech-expertise">
            <img
              alt="Google Analytics logo"
              height="50"
              src="/jira (1).webp"
              width="50"
            />
            <img
              alt="Google Analytics logo"
              height="50"
              src="/wrike.webp"
              width="30"
            />
            <img alt="HubSpot logo" height="50" src="/zoho.webp" width="50" />
            <img alt="AWeber logo" height="50" src="/bizagi.webp" width="50" />
          </div>
          <div className="tech-buttons">
            <div className="tech-button">
              <p>JIRA</p>
            </div>
            <div className="tech-button">
              <p>Wrike</p>
            </div>
            <div className="tech-button">
              <p>Zoho Projects</p>
            </div>
            <div className="tech-button">
              <p>Basecamp</p>
            </div>
          </div>

          <div className="tech-buttons">
            <div className="tech-button">
              <p>Lucidchart</p>
            </div>
            <div className="tech-button">
              <p>Balsamiq Wireframe</p>
            </div>
            <div className="tech-button">
              <p>Bizagi</p>
            </div>
            <div className="tech-button">
              <p>Confluence</p>
            </div>
          </div>
          <button className="tech-view-more">View More</button>
        </div>
      </div>
      <Gettoknow know={gettoknow} />
      <Footer />
    </>
  );
}

export default Web;
