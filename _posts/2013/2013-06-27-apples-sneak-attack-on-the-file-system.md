---
layout: post
date: 2013-06-27
permalink: /2013/06/apples-sneak-attack-on-the-file-system/
tweet: Tags, Tags Everywhere!
tags: [post, Apple, Mavericks, Vesper, Tags, iOS, "Mac OS X", "File System"]
title: Apple's Sneak Attack on the File System
---

<h2 id="tagstagseverywhere">Tags, Tags Everywhere</h2>

<p>After listening to John Gruber on this week’s <a href="http://5by5.tv/systematic/50/" title="John Gruber on iOS design, Markdown and ice cube trays - 5by5.tv">Systematic</a>, my thoughts were clarified on the subject of tags and I had to get them down. There have been quite a few podcasts recently that interview Gruber and the rest of the team of Q Branch regarding their recently release app, <a href="http://vesperapp.co/" title="Vesper. Collect your thoughts.">Vesper</a>. However, I think that some of <a href="http://brettterpstra.com/" title="BrettTerpstra.com">Brett Terpstra</a>’s questions elicited some of the more intriguing design and functionality-based ideas from Gruber. </p>

<p>The first half of the podcast is largely focused on Vesper’s design and use cases, including the use of tags, which prompted this gem from Gruber:</p>

<blockquote>
<p>It’s that way that one item can have multiple tags and be in multiple places. To me, the tagging metaphor solves a lot of organizational problems that traditional hierarchical organizational methods fail at.</p>

<p>-John Gruber, Systematic, 00:02:18</p>
</blockquote>

<p>Point of interest, Vesper is a thought-collection app that aside from a great design includes the ability to arrange and categorize notes by tags. Tags have been around for a long time, as Gruber notes, so this is not a new idea (and no, that social network you’re using was not the first to use them); tags simply haven’t always been forward facing. Instead, metadata has been used by applications to categorize items behind the scenes for a better user experience. The importance of tags as a organizational method in my mind is about to change drastically with apps like Vesper and OS level tagging systems like that of OS X Mavericks leading the way to the end of the hierarchical file systems as we know them.</p>

<h2 id="osxmavericks">OS X Mavericks</h2>

<p>I have been using the <a href="http://www.apple.com/osx/preview/" title="OS X Mavericks - Apple.com">OS X 10.9 Developer Preview</a> (DP) since it was released and recently, DP2 was released, though not much changed between the two versions in the ways I use it. Jim Dalrymple has a thorough first look into the operating system over at <a href="http://www.loopinsight.com/2013/06/25/first-look-os-x-mavericks/" title="First Look: OS X Mavericks - The Loop">The Loop</a> for those that are interested. I am using the OS on a test machine that I setup basically the same way as any other machine. I have been playing around with the new functions, though there is a relative dearth of new features in this release, and am pleased thus far. However, the item I want to discuss here, as may be apparent, is Finder’s new tag functionality.</p>

<p><a href="http://www.apple.com/osx/preview/#tags" title="Tags - Apple.com">Tags in Finder</a> are unassuming and can be easily missed, but I think it is the way that Apple is going to attack the file system long term. As Mr. Gruber stated on Systematic, many of the problems with common folder-based hierarchies are solved by the use of tags in the sense that no document has a single location with which it is associated. Instead, tags allow documents to exist in any number of locations based on its specific categorizations. In the Finder sidebar, by default, no internal or external drives are shown anymore because Apple doesn’t want the user to have to delve into the file system. Instead, the user gets “All Files”, specific “Favorite” locations that are often defined by what they contain—Applications, Documents, Downloads, and so forth—and, now, Tags that automatically populate based on what the user adds to their documents. If all the documents in a computer were tagged well, there would be no need for folders. Instead, tags act as folder-style designations; a user could search for specific tags or use the built-in Tag list (“Smart Folders”) in the sidebar. In addition, a list of all the documents on the computer separated by their file type would be sufficient for most users who want to find their images, PDFs, spreadsheets, etc.</p>

<p>I believe the long term effects of this move away from file systems and folders is a reorientation from Information Architecture (IA) to simply information. Honestly, the biggest problem is that people are bad at IA, which is not the fault of the user. IA is hard, a fact that becomes clear when you can major in the subject. IA takes time, effort, and an understanding of both the details of the documents themselves and the larger picture of the system. I think that Apple is attempting to educate the user slowly that documents don’t have to exist in a single location and they don’t have to be difficult to find. Mr. Dalrymple doesn’t really think tags are anything special because of previous incarnations that have been less than ideal, e.g. blogging tags. Though I obviously feel quite differently regarding the use and future of tags in the OS, I understand Jim’s perspective and hope that Apple can make the use of tags easy enough to sway even him. Disliking tags is fine for the time being, but I have a feeling people are going to want to get used to them quickly.</p>

<p>The clue that I mentioned above and that I hope means something is the relative dearth of new features in this OS release. Many of the most exciting features of Mavericks are under the hood, meaning that the few customer-facing features carry a lot of weight in my mind (and possibly in the minds of customers). I hope that Mavericks is the education process that will queue big movements towards a file-system-less OS X in coming releases.</p>

<h2 id="thelargerpicture">The Larger Picture</h2>

<p>I for one will be tagging all of my documents in the attempt to better prepare for the day when the file system is a thing of the past. Apple’s consistent moves toward ridding themselves of the traditional file system are coming to a head on the Mac and iOS will be close behind, as more and more people ask for the ability to handle documents on their iOS devices and as the traditional computer becomes more marginalized with the popularity of mobile. </p>

<p>On iOS, I expect to see an “All Files” style implementation, a shared space where documents exist for apps to access (and save to) at the user’s discretion. Just the like Mac implementation, different types of documents—Images, PDFs, Music, Movies, Presentations, Spreadsheets, Text Documents, etc.—will be collected into categories. The user can search the entire document set or within the various categories with the tags they have used. Perhaps the user can also search using the name of the application in which the document was created (but I doubt that). In an ideal world, these documents, tags, and other metadata would be synced between devices using iCloud.</p>

<p>iCloud and Documents in the Cloud will have to step up their involvement to handle such a move. I am not talking about the need for a Dropbox-style file system syncing because as I stated tags will make a hierarchical file system irrelevant. Instead, iCloud would simply deal with the syncing among the registered devices to the document pool. The web interface could work as many other iCloud apps do, provide access to the documents for download and sharing. In addition, with the new iCloud iWork apps, Apple could allow access to document editing directly from within Documents in the Cloud for compatible file types. Another clue I see in Mavericks for this type of integration is the “Tags in iCloud” information:</p>

<blockquote>
<p>Tags are a powerful new way to organize and find your files, even documents stored in iCloud. Simply tag files you want to organize together with a keyword, like “Important.” Then when you want to find those files, just click Important in the Finder sidebar or enter it in the search field. Tag a file once, or give it multiple tags to assign it to multiple projects. If you have documents stored in multiple iCloud libraries, tags let you group them together into projects. So if you’re planning an event, you could tag the guest list you saved in Numbers, the flyer you designed in Pages, and the presentation you created in Keynote, and see them all with just one click — organized as a single project in a single Finder window. </p>

<p>“Tags in iCloud” Image Subtext: Use tags to organize documents in iCloud by project.</p>

<p><a href="http://www.apple.com/osx/preview/#tags" title="Tags in iCloud - Apple.com">Tags in iCloud</a></p>
</blockquote>

<p>All of this is to say that Apple is, in my mind, moving to a future in which the file system is irrelevant and tags are the preferred method by which users organize and find their information no matter the location. If this is the case, the future seems pretty nice.</p>